class Api::ListingsController < ApplicationController 
    def index
        @listings = Listing.all
    
        if params[:bounds] 
            @listings = Listing.in_bounds(params[:bounds])
        end

        if params[:min_beds] 
            @listings = @listings.select { |lis| lis.num_beds >= params[:min_beds].to_i }
        end

        if params[:max_beds] 
            @listings = @listings.select { |lis| lis.num_beds <= params[:max_beds].to_i }
        end

        if params[:min_price] 
            @listings = @listings.select { |lis| lis.rate >= params[:min_price].to_i }
        end

        if params[:max_price] 
            @listings = @listings.select { |lis| lis.rate <= params[:max_price].to_i }
        end
        debugger
        if params[:search_city] && params[:search_city] != "null"
            @listings = @listings.select { |lis| lis.city == params[:search_city] }
        end
        
        if params[:date_range] 
            @listings = @listings.select { |lis| lis.available_in_range?(params[:date_range]) }
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
        params.require(:listing).permit(:title, :description, :rate, :lat, :lng, :city, :num_beds, :photos, :date_range, :bounds, :max_beds, :min_beds, :search_city, :min_price, :max_price)
    end
end
