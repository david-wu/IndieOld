class Api::EventsController < ApplicationController

  def update
    @event = Event.find(params['id'])
    render json: @event
  end

  def create
    @event = Event.new(event_params)
    @user = User.find_by(session_token: params['session_token'])
    @event.owner_id = @user.id
    if @event.save!
      render json: @event
    else
      render json: {errors: @event.errors.full_messages}, status: 422
    end
  end

  def event_params
    params.permit(:id, :owner_id, :category, :img_src, :title, :description,
    :funds_raised, :funds_goal, :start, :end, :place)
  end

end
