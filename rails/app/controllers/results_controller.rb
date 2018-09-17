class ResultsController < ApplicationController
	protect_from_forgery except: :create

	def show
		results_sentence = ""
		render json: results_sentence
	end

	def create
		result = params[:number]
		render json: 'OK'
	end

	def update
		result = {id: params[:id], question_id: params[:question_id], input: params[:answer]}
		inputs = []
		inputs.push({question_id: params[:question_id], input: params[:answer]})
		results = {
			id: result[:id],
			inputs: inputs
		}
		render json: results
	end
end
