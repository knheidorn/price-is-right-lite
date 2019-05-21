class Product < ApplicationRecord
  has_many :game_products
  has_many :games, through: :game_products
end
