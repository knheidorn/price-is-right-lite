class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :email, :picture, :token
  has_many :games
end
