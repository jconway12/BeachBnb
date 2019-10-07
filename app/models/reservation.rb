class Reservation < ApplicationRecord 
    validates :start_date, :end_date, :num_guests, presence: true 
    # validates :start_date, :end_date, :no_overlap

    belongs_to :listing

    belongs_to :renter,
    foreign_key: :renter_id,
    class_name: :User

    has_one :owner,
    through: :listing,
    source: :owner

    #method to make sure reservations cannot overlap (custom validation)
    private
    def overlap?(reservation)
     if !(reservation.start_date > self.end_date || 
        reservation.end_date < self.start_date) 
        return true
     end
     false
    end

    def self.does_overlap_any?(reservation) 
        return true if reservation.start_date > reservation.end_date
        listing_id = reservation.listing_id
        sameListingRes = Reservation.find_by(listing_id: listing_id)
        sameListingRes.each do |res|
            return true if res.overlap?(reservation)
        end

        false
    end

    def no_overlap 
        if Reservation.does_overlap_any?(self)
            errors.add(:start_date, :end_date, :invalid_date_range)
        end
    end
end