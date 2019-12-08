class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.string :genre
      t.string :image_src
      t.string :discription
      t.integer :release_date
      t.timestamps
    end
  end
end
