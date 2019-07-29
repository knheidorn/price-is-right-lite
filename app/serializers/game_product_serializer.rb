class GameProductSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :product_id
  belongs_to :game
  belongs_to :product
end
