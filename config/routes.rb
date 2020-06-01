Rails.application.routes.draw do
  root to: 'user#index'

  namespace :api, format: 'json' do
    +   resources :users, only: [:index, :create, :update]
    + end
end
