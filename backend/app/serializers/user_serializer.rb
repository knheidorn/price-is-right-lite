class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :email, :picture
  has_many :games
end
