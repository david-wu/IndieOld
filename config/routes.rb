Rails.application.routes.draw do
  root "static_pages#index"
  namespace :api do
    resources :events
  end
end
