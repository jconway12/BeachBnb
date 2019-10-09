class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false 
      t.string :body, null: false 
      t.integer :reviewable_id, null: false 
      t.string :reviewable_type, null: false 

      t.timestamps
    end
  end
end
