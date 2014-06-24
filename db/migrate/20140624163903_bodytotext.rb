class Bodytotext < ActiveRecord::Migration
  def change
    change_column :events, :body, :text
  end
end
