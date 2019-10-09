@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :author_id, :body, :reviewable_id, :reviewable_type
    end
end
