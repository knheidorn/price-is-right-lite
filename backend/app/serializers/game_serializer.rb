class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :score
  belongs_to :user
end
