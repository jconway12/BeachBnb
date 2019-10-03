class BnbsController < ApplicationController 
    def index
        @bnbs = Bnb.all
    end

    def show
        @bnb = Bnb.find_by(params[:id])
    end

    def create
        @bnb = Bnb.new(bnb_params)
        @bnb.owner_id = current_user.id
        if @bnb.save
            render :show
        else
            render json: @bnb.errors.full_messages, status: 422
        end
    end

    def update
        @bnb = Bnb.find_by(params[:id])
        if @bnb && @bnb.update(bnb_params)
            render :show
        else
            render json: ["Invalid credentials"], status: 422
        end
    end

    def destroy
        @bnb = Bnb.find_by(params[:id])
        @bnb.destroy 
        render json: {}
    end

    private
    def bnb_params 
        params.require(:bnb).permit(:title, :description, :rate, :lat, :lng)
    end
end
