class TopsController < ApplicationController
	def index
		obj = {'key': 'value'}
		render json: obj
	end
end
