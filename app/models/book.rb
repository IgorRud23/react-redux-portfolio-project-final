class Book < ApplicationRecord
  validates :name,  presence: true
  validates :author,  presence: true
  validates :genre,  presence: true
  validates :image_src,  presence: true
  validates :discription,  presence: true
  validates :release_date,  presence: true
end
