class Reservation < ApplicationRecord 
    validates :start_date, :end_date, :num_guests, presence: true 
    validate :no_overlap

    after_initialize :set_passed

    belongs_to :listing

    belongs_to :renter,
    foreign_key: :renter_id,
    class_name: :User

    has_one :owner,
    through: :listing,
    source: :owner

    #method that returns whether or not the reservation has passed
    def passed?
        return true if Date.today > self.end_date
        false
    end

    def set_passed 
        if self.passed?
            self.passed = true
        end
    end
    #method to make sure reservations cannot overlap (custom validation)
    def overlap?(reservation)
     if !(reservation.start_date > self.end_date || 
        reservation.end_date < self.start_date) 
        return true
     end
     false
    end

    def does_overlap_any?
        return true if self.start_date > self.end_date
        listing_id = self.listing_id
        all_res = Reservation.all
        all_res.each do |res|
            if(res.listing_id == listing_id) 
             return true if res.overlap?(self)
            end
        end

        false
    end

    def no_overlap 
        if self.does_overlap_any?
            errors.add(:start_date, :invalid_date_range)
        end
    end
end