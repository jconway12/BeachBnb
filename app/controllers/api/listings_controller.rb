class Api::ListingsController < ApplicationController 
    def index
        #add filters: passed: true, city: 'name', bounds: blah blah
        #if params[:bounds]...
        @listings = Listing.all

        if params[:bounds] 
            # @listing = @listing.select{}
        end

        if params[:min_beds] 
            @listings = @listings.select { |lis| lis.num_beds >= params[:min_beds] }
        end

        if params[:max_beds]
            @listings = @listings.select { |lis| lis.num_beds <= params[:max_beds] }
        end

        if params[:search_city] 
            @listings = @listings.select { |lis| lis.city == params[:search_city] }
        end
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
        #ADD IN FILTER TYPES TO PERMITTED PARAMS
        params.require(:listing).permit(:title, :description, :rate, :lat, :lng, :city, :num_beds, :photos, :bounds, :max_beds, :min_beds, :search_city, :passed)
    end
end
