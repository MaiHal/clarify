import React from "react";

class Button extends React.Component {
  addNextButton() {
    console.log("やっちゃおーよ");
  }

  render() {
    console.log("oooo");
    return <button onClick={this.addNextButton}>次へ</button>;
  }
}

export default Button;
