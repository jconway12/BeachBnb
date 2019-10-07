class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :listing_id, null: false 
      t.integer :renter_id, null: false 
      t.date :start_date, null: false 
      t.date :end_date, null: false 

      t.timestamps
    end
  end
end
