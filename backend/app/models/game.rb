class Game < ApplicationRecord
  belongs_to :user
  has_many :game_products
  has_many :products, through: :game_products
end
