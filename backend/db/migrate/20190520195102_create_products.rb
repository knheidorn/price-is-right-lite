class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :category
      t.string :title
      t.text :description
      t.integer :price
      t.string :image_url
      t.string :link_to_amazon

      t.timestamps
    end
  end
end
