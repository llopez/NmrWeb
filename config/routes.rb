Rails.application.routes.draw do
  root to: 'pages#index'
  get 'clases' => "pages#classes", as: :classes
end
