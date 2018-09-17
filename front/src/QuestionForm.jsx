import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      questionID: 1,
      questionTitle: ""
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
      .then(json => {
        console.log(json);
      })
      .catch(err => {
        console.error("post error: ", err);
      });

    fetch(" /questions/" + this.state.questionID, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        if (resp.status !== 200) {
          throw new Error(resp.statusText);
        }
        return resp;
      })
      .catch(err => {
        console.error("get info error: ", err);
      })
      .then(x => x.json())
      .then(json => {
        console.log(json);
        this.setState({ questionTitle: json.content, questionID: json.id });
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.questionTitle}</div>
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
