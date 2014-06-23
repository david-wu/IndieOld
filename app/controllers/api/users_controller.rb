class Api::UsersController < ApplicationController

  def login
    @user = User.find_by!(email: user_params[:email])
    if(@user.is_password?(user_params[:password]))
      @user.reset_token
      @user.password_digest = nil
      render json: @user
    else
      render json: {errors: ['Invalid username/password']}, status: 422
    end
  end

  def create
    @user = User.new(user_params)
    @user.password = user_params[:password]
    if @user.save!
      render json: @user
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def current
    @user = User.find_by!(session_token: params['sessionToken'])
    if @user
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def update
    @user = User.find_by(id: params['id'])
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def user_params
    params.permit(:email, :fname, :lname, :password)
  end

end
