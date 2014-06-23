class Event < ActiveRecord::Base
  validates :owner_id, presence: true
  validates :funds_goal, presence: true
end
