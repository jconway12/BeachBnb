class Listing < ApplicationRecord 
    validates :num_beds, :title, :description, :rate, :lat, :lng, presence: true

    belongs_to :owner, 
    foreign_key: :owner_id,
    class_name: :User

    # belongs_to :location,
    # foreign_key: :location_id,
    # class_name: :Location

    #class methods for google maps markers
end