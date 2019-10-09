class Api::ReviewsController < ApplicationController 
    def index
        # debugger
        reviewable_id = params[:reviewable_id]
        reviewed = params[:reviewable_type] == "Listing" ? Listing.find(reviewable_id) : User.find(reviewable_id)
        # debugger
        @reviews = reviewed.reviews
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id 
        if @review.save 
            render json: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @reivew = Review.find(params[:id])
        if current_user.id = @review.author_id && @review.update(review_params)
            render json: @review
        else
            render json: ["Invalid Information"], status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        id = @review.id 
        @review.destroy 
        render json: id
    end

    private
    def review_params
        params.require(:review).permit(:body, :reviewable_id, :reviewable_type)
    end
end