Rails.application.routes.draw do
  mount API, at: '/api'

  root to: redirect('/home')

  get '/auth/cognito-idp/callback', to: 'sessions#create'

  get '/login', to: redirect('/auth/cognito-idp')
  get '/logout', to: 'sessions#destroy'

  get '/robots', to: 'systems#robots'
  get '/sitemap', to: 'pages#index'

  get '/system/test_500_error', to: 'systems#test_500_error'
  get '/system/test_timeout_error', to: 'systems#test_timeout_error'

  get '/user/sites', to: 'admin/sites#index'

  namespace :admin do
    resource :site, only: %i[edit update]
    resource :stylesheet, only: %i[edit update]
    resources :images, only: [:index]
    resources :messages, only: %i[index show]
    resources :users, only: [:index]
  end

  resources :css, only: %i[show]

  resources :pages, path: '', only: %i[new create show edit update destroy] do
    member do
      post :contact_form
    end
  end

  match '*path', to: 'application#page_not_found', via: :all
end
