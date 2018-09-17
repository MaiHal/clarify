class ResultsController < ApplicationController
	protect_from_forgery except: :create

	def show
<<<<<<< HEAD
		results_sentence = ""
		render json: results_sentence
	end

	def create
		result = params[:number]
=======
		
		render json: @@results
	end

	def create
		result = {id: 1} #一意のあれ
>>>>>>> a61758060d729ee0a8c23fcd4cd6be5aedbf5da7
		render json: 'OK'
	end

	def update
<<<<<<< HEAD
		result = {id: params[:id], question_id: params[:question_id], input: params[:answer]}
		inputs = []
		inputs.push({question_id: params[:question_id], input: params[:answer]})
		results = {
			id: result[:id],
=======
		result = {id: "#{params[:id]}", question_id: "#{params[:question_id]}", input: "#{params[:answer]}"}
		inputs = []
		inputs.push({question_id: "#{params[:question_id]}", input: "#{params[:answer]}"})
		results = {
			id: "#{result[:id]}",
>>>>>>> a61758060d729ee0a8c23fcd4cd6be5aedbf5da7
			inputs: inputs
		}
		render json: results
	end
end
