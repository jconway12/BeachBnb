class Listing < ApplicationRecord 
    validates :title, :description, :rate, :lat, :lng, presence: true

    belongs_to :owner, 
    foreign_key: :owner_id,
    class_name: :User

    #class methods for google maps markers
end