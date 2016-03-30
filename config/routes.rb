Rails.application.routes.draw do
  root to: 'pages#index'
  get 'clases' => "pages#classes", as: :classes
  get 'donde' => "pages#where_are_we", as: :where_are_we

  post 'messages' => "messages#create", as: :messages
  get 'messages/new' => "messages#new", as: :new_message
end
