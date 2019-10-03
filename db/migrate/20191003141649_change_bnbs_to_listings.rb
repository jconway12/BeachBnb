class ChangeBnbsToListings < ActiveRecord::Migration[5.2]
  def change
    rename_table :bnbs, :listings
  end
end
