class GameProduct < ApplicationRecord
  belongs_to :game
  belongs_to :product
end
