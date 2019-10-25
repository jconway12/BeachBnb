class Reservation < ApplicationRecord 
    validates :start_date, :end_date, :num_guests, presence: true 
    validate :no_overlap
    validate :no_self_booking

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
        return false unless self.end_date && self.start_date
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
        return false unless self.end_date && self.start_date
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
            errors.add(:start_date, :dates_taken)
        end
    end

    def date_available?(listing, date) #takes a date and returns true if does not fall in any conflicting reservation
        listing.reservations.each do |res|
            return false if date > res.start_date && date < res.end_date
        end

        true
    end

    def no_self_booking 
        #need validation on not booking your own listing
        user = User.find(self.renter_id)
        listing = Listing.find(self.listing_id)
        if user.listings.include?(listing)
            errors[:renter_id] << 'Cannot book own listing'
        end
    end
end