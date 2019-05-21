class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :title, :description, :price, :image_url, :link_to_amazon
  has_many :game_products
  has_many :games, through: :game_products
end
