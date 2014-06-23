class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :owner_id
      t.string :category
      t.string :img_src
      t.string :title
      t.string :description
      t.integer :funds_raised
      t.integer :funds_goal
      t.string :start
      t.string :end
      t.string :place

      t.timestamps
    end
  end
end
