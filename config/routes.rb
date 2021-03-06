Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create, :update] do 
      resources :reservations, only: [:index]
    end
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    resources :reservations, only: [:show, :create, :update, :destroy, :index]
    resources :reviews, only: [:index, :create, :update, :destroy]
  end
end
