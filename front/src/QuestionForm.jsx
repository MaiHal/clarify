import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.changeText = this.changeText.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  changeText(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" name="hello" onChange={this.changeText} />
      </div>
    );
  }
}
