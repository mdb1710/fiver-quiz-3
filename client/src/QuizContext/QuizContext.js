import React from "react";

const QuizContext = React.createContext({
  testName: "",
  questions: [],
  questionNumber: null,
  totalDreamer: 0,
  totalAction: 0,
  totalSelf: 0,

  display: true,
  confirmAnswer: () => {},
  dreamerAnswers: [],
  actionAnswers: [],
  selfAnswers: []
});

export default QuizContext;
