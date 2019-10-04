class Api::ListingsController < ApplicationController 
    def index
        #need to add in which filters are assigned and call proper methods
        @listings = Listing.all
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.owner_id = current_user.id
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing && current_user.id == @listing.owner_id && @listing.update(listing_params)
            render :show
        else
            render json: ["Invalid credentials"], status: 422
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        id = @listing.id
        @listing.destroy 
        render json: id
    end

    private
    def listing_params 
        params.require(:listing).permit(:title, :description, :rate, :lat, :lng, :city)
    end
end
