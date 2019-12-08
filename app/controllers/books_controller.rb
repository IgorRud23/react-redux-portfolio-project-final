class BooksController < ApplicationController

  def list
    @books = Book.all
  render json: @books
  end

  def create
    @book = Book.new(book_params)
      if @book.save
        render json: @book
      else
        render json: {status: "error", code: 400, message: "Try again"}
      end
  end

private

  def books_params
    params.require(:book).permit(:name, :author, :genre, :image_src, :discription, :release_date)
  end

  def delete
    @book ||= Book.find(params[:id])
    @book.delete
    render json: params[:id]
  end

end
