class AddPassedToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :passed, :boolean, default: false
  end
end
