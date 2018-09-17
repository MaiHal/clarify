import React from "react";
import ReactDOM from "react-dom";
import QuestionTitle from "./QuestionTitle";
import Button from "./Button";
import QuestionForm from "./QuestionForm";

ReactDOM.render(
  <div>
    <QuestionTitle />
    <QuestionForm />
    <Button />
  </div>,
  document.getElementById("root")
);
