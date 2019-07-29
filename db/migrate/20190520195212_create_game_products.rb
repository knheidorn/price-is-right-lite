class CreateGameProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :game_products do |t|
      t.integer :game_id
      t.integer :product_id

      t.timestamps
    end
  end
end
