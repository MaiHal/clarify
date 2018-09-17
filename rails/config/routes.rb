Rails.application.routes.draw do
  get "/questions/:id", to: "questions#show"
  post "/results", to: "results#create"
  post "/results/:id", to: "results#update"
  get "/results/:id", to: "results#show"
end
