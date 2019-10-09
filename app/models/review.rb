class Review < ApplicationRecord 
    validates :body, :reviewable_type, presence: true
    validates :reviewable_type, inclusion: { in: ["Listing", "User"] }

    has_one :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :reviewable,
    polymorphic: true

end