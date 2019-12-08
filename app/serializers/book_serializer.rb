class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :genre, :image_src, :discription, :release_date
end
