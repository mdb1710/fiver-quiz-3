import React from "react";

const QuizContext = React.createContext({
  testName: "",
  questions: [],
  questionNumber: null,
  totalYes: 0,
  totalNo: 0,

  display: true,
  confirmAnswer: () => {},
  correctAnswers: []
});

export default QuizContext;
