class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
  end
end
