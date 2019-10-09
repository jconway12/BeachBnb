class Listing < ApplicationRecord 
    validates :num_beds, :city, :title, :description, :rate, :lat, :lng, presence: true
    validate :ensure_photo

    belongs_to :owner, 
    foreign_key: :owner_id,
    class_name: :User

    has_many :reservations,
    foreign_key: :listing_id,
    class_name: :Reservation

    has_many :reviews, 
    as: :reviewable

    has_many_attached :photos

    #photo validation
    def ensure_photo 
        unless self.photos.attached?
            errors[:photos] << 'Must be attached'
        end
    end

    def available_in_range?(date_range)
        # debugger
        self.reservations.each do |res|
            if !(date_range["start_date"] > res.end_date.to_s || 
            date_range["end_date"] < res.start_date.to_s) 
                return false
            end
        end
        true
    end

    #MAKE CLASS METHOD THAT RETURNS AVERAGE PER CITY
    def self.get_locations
        cities = []
        Listing.all.each do |listing|
            cities << listing.city
        end

        cities
    end

    def self.in_city(city) 
        listings = Listing.all
        listings.select {|listing| listing.city == city}
    end

    def self.in_bounds(bounds)
        upperLat = bounds['northEast']['lat'].to_f
        lowerLat = bounds['southWest']['lat'].to_f

         upperLng = bounds['northEast']['lng'].to_f
        lowerLng = bounds['southWest']['lng'].to_f

         listings = Listing.all
        in_bound_listings = []

        listings.each do |listing|
      
        if listing.lat.between?(lowerLat, upperLat) && listing.lng.between?(lowerLng, upperLng)
         in_bound_listings << listing
         end
        end

     return in_bound_listings
   end
end