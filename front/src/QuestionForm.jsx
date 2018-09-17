import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      questionID: 1,
      number: 0,
      questionTitle: "問題に関連する、言語やツールを入力してください。"
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
      input: this.state.content,
      number: this.state.number + 1
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
        //   何が返ってきたのかをみる
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
      <div style={styles.container}>
        <div style={styles.text}>{this.state.questionTitle}</div>
        <input
          style={styles.textBox}
          type="text"
          value={this.state.content}
          name="hello"
          onChange={this.changeText}
        />
        <button onClick={this.clickNextButton} style={styles.button}>
          <div style={styles.icon} />
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#3c444c",
    height: "2000px",
    width: "2000px"
  },
  text: {
    color: "white",
    paddingLeft: "25%",
    paddingTop: "10%"
  },
  textBox: {
    marginTop: "20px",
    marginLeft: "30%",
    borderRadius: "5%"
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: "50%",
    backgroundColor: "#3c444c",
    borderColor: "#3c444c"
  },
  icon: {
    color: "#FF570D",
    position: "absolute",
    marginLeft: "3px",
    marginTop: "4px",
    width: "14px",
    height: "8px",
    borderBottom: "solid 1px currentColor",
    borderLeft: "solid 1px currentColor",
    transform: "rotate(-45deg)"
  }
};
