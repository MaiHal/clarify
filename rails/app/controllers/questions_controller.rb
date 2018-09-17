class QuestionsController < ApplicationController
	def show
		questions = 
		[
		{id: 1, content: 'ポイント1'},
		{id: 2, content: 'ポイント2'},
		{id: 3, content: 'ポイント3'},
<<<<<<< HEAD
		{id: 4, content: 'ポイント4'},
		{id: 5, content: 'ポイント5'},
		{id: 6, content: 'ポイント6'},
		{id: 7, content: 'ポイント7'},
		]

		render json: {number: 0, questions: questions}
=======
		{4:'ポイント4'},
		{5:'ポイント5'},
		{6:'ポイント6'},
		{7:'ポイント7'},
		]

		render json: question
>>>>>>> a61758060d729ee0a8c23fcd4cd6be5aedbf5da7
	end
end
