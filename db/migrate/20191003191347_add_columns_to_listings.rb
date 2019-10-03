class AddColumnsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :location_id, :integer
    add_column :listings, :num_beds, :integer
  end
end
