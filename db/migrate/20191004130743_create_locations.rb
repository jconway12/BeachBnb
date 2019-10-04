class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :city, null: false
      t.string :country, null: false 
      t.float :max_lat, null: false 
      t.float :min_lat, null: false 
      t.float :max_lng, null: false 
      t.float :min_lng, null: false 

      t.timestamps
    end
  end
end
