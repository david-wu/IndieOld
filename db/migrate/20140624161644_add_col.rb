class AddCol < ActiveRecord::Migration
  def change
    add_column :events, :body, :string
    add_column :events, :currency, :string
  end
end
