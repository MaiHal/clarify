import React from 'react';

export default class QuestionForm extends React.Component{
    constructor(props){
        super(props);

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e){
        this.setState({
            nowAnswer: e.target.value
        })
    }

    render(){
        return(
            <input type="text" value={this.state.nowAnswer} onChange={this.handleInput}/>
        )
    }
}