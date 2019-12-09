import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import QuizSection from "./QuizSection/QuizSection";
import Results from "./Results/Results";

import QuizContext from "./QuizContext/QuizContext";

import "./App.css";

const App = () => {
  const contextValue = {
    houseGuest: "",
    questions: [],
    questionNumber: null,
    totalDreamer: 0,
    totalAction: 0,
    totalSelf: 0,

    dreamerAnswers: [],
    actionAnswers: [],
    selfAnswers: [],
    userAnswers: [],
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
