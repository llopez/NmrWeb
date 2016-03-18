Rails.application.routes.draw do
  root to: 'pages#index'
  get 'page' => "pages#page", as: :page
end
