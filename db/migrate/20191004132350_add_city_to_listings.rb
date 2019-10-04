class AddCityToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :city, :string
    remove_column :listings, :location_id
  end
end
