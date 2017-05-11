Rails.application.routes.draw do
  get 'welcome/index'
  resources :doctors
  root 'welcome#index'
end
