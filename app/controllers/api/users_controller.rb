class Api::UsersController < ApplicationController 
  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    # debugger
    @user = User.new(user_params)
    @user.photo.attach(io: File.open("app/assets/images/defaultProf.png"), filename: "defaultProf.png") unless user_params[:photo]

    if @user.save
      login!(@user)
      render :show
    else
      # debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find(params[:id])
    if @user && @user.update(user_params)

      render :show
    else
      render json: ['Upload Error']
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :photo, :bio, :hometown)
  end
end