Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    get '/books/list' => 'books#list'
    post '/books/create' => 'books#create'
    post '/books/delete' => 'books#delete'
  end
end
