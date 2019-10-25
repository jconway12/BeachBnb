class Api::ReservationsController < ApplicationController 
    def show
        @reservation = Reservation.find(params[:id])
        render json: @reservation
    end

    def index 
        if params[:user_id] 
            user = User.find(params[:user_id])
            @reservations = user.reservations
        else 
           @reservations = Reservation.all 
        end
        
        render :index
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.renter_id = current_user.id 
        # debugger
        if @reservation.save
            render json: @reservation
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation && @reservation.renter_id == current_user.id &&
             @reservation.update(reservation_params)
            render json: @reservation
        else 
            render json: ["invalid information"], status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        id = @reservation.id
        @reservation.destroy
        render json: id
    end

    private 
    def reservation_params
        params.require(:reservation).permit(:listing_id, :start_date, :end_date, :num_guests, :passed)
    end
end