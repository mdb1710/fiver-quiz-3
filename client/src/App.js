import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import QuizSection from "./QuizSection/QuizSection";
import Results from "./Results/Results";

import QuizContext from "./QuizContext/QuizContext";

import testQuestions from "./TestQuestions";

import "./App.css";

const App = () => {
  const bbAnswers = testQuestions.map(answer => {
    return answer.correctAnswer;
  });

  const logoImage = require("./assets/eldercare-logo-transparent-bg-2.png");

  console.log(bbAnswers);

  const contextValue = {
    houseGuest: "",
    questions: [],
    questionNumber: null,
    totalRight: "",
    totalWrong: "",
    correctAnswers: bbAnswers,
    time: null,
    display: true
  };

  return (
    <div className="App text-white w-80">
      <header className="App-header p-6">
        <h1 className="text-center my-5 mb-10 shadow-sm text-uppercase bg-info">
          Minimalist Quiz
        </h1>
      </header>
      <div className="logo-image">
        <img src={logoImage} alt="Eldercare logo" />
      </div>
      <main>
        <QuizContext.Provider value={contextValue}>
          <Route exact path="/" component={Homepage} />
          <Route path="/quiz" component={QuizSection} />
          <Route path="/results" component={Results} />
        </QuizContext.Provider>
      </main>
    </div>
  );
};

export default App;
