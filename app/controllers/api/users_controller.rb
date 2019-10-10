class Api::UsersController < ApplicationController 
  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      # debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :photo)
  end
end