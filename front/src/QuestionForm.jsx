import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      questionID: 1
    };
    this.changeText = this.changeText.bind(this);
    this.clickNextButton = this.clickNextButton.bind(this);
  }

  changeText(e) {
    this.setState({ content: e.target.value });
  }

  clickNextButton() {
    const answer = {
      question_id: this.state.question_id,
      input: this.state.content
    };

    fetch("/results/" + this.state.questionID, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answer)
    })
      .then(resp => {
        if (resp.status === 201 || resp.status === 200) {
          return resp;
        }
        throw new Error(resp.statusText);
      })
      .then(x => x.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error("post message error: ", err);
      });
  }

  render() {
    return (
      <div>
        <div>問題を表示します</div>
        <input
          type="text"
          value={this.state.content}
          name="hello"
          onChange={this.changeText}
        />
        <button onClick={this.clickNextButton}>次へ</button>
      </div>
    );
  }
}
