class QuestionsController < ApplicationController
	def show
		questions = 
		[
		{id: 1, content: 'ポイント1'},
		{id: 2, content: 'ポイント2'},
		{id: 3, content: 'ポイント3'},
		{4:'ポイント4'},
		{5:'ポイント5'},
		{6:'ポイント6'},
		{7:'ポイント7'},
		]

		render json: question
	end
end
