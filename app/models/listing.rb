class Listing < ApplicationRecord 
    validates :num_beds, :city, :title, :description, :rate, :lat, :lng, presence: true

    belongs_to :owner, 
    foreign_key: :owner_id,
    class_name: :User

    has_many_attached :photos

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