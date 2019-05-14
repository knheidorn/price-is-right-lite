class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :email
      t.string :picture
      t.text :token

      t.timestamps
    end
  end
end
