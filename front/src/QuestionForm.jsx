import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.changeText = this.changeText.bind(this);
    this.clickNextButton = this.clickNextButton.bind(this);
  }

  changeText(e) {
    this.setState({ content: e.target.value });
  }

  clickNextButton(){
    this.setState({ content: "" })
  }

  render() {
    return (
      <div>
          <div></div>
        <input type="text" value={this.state.content} name="hello" onChange={this.changeText} />
        <button onClick={this.clickNextButton}>次へ</button>
      </div>
    );
  }
}
