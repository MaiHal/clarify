import React from 'react';

export default class QuestionForm extends React.Component{
    constructor(props){
        super(props);
        // this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e){
        // this.setState({
        //     nowAnswer: e.target.value
        // })
    }

    render(){
        return(
            <div>
            <input type="text" name="hello"/>
            </div>
            
        )
    }
}