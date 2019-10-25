class Review < ApplicationRecord 
    validates :body, :reviewable_type, presence: true
    validates :reviewable_type, inclusion: { in: ["Listing", "User"] }
    # validate :no_self_review
    validate :no_repeat

    has_one :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :reviewable,
    polymorphic: true

    def no_self_review 
        if self.self_review?
            errors[:reviewable_id] << 'Cannot review own listing' #should be must have stayed to make review
        end
    end

    # def self_review?
    #     if self.reviewable_id == self.author.id || self.author.listings.include?(self.reviewable)
    #         return true
    #     end

    #     false
    # end

    def no_repeat
        #users cannot comment on same listing twice
        reviews = Review.all
        reviews.each do |rev|
            if rev.reviewable_id == self.reviewable_id && rev.author_id == self.author_id 
                errors[:author_id] << 'Cannot review a listing more than once'
            end
        end
    end
end