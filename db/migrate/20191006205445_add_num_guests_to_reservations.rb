class AddNumGuestsToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :num_guests, :integer
  end
end
