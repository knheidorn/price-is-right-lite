class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :score
  belongs_to :user
  has_many :game_products
  has_many :products, through: :game_products
end
