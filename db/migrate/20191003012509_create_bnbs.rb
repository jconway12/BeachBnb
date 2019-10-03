class CreateBnbs < ActiveRecord::Migration[5.2]
  def change
    create_table :bnbs do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :rate, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
