import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import testQuestions from "../TestQuestions";
import QuizContext from "../QuizContext/QuizContext";
import "./Questions.css";

const Questions = () => {
  const value = useContext(QuizContext);

  const [totalDreamer, setTotalDreamer] = useState(0);
  const [totalAction, setTotalAction] = useState(0);
  const [totalSelf, setTotalSelf] = useState(0);

  const [answered, setAnswered] = useState(false);

  const handleCheckAnswer = e => {
    let checkedAnswer = e.target.value;
    let checkedNumber = e.target.id - 1;
    let letter = checkedAnswer.charAt(0).toLowerCase();

    console.log(checkedAnswer, "was clicked - is it right?", letter);
    console.log(checkedNumber, totalDreamer, totalAction, totalSelf);

    if (letter === "b") {
      setTotalDreamer(totalDreamer + 3);
      value.dreamerAnswers.push(letter);
      console.log(value.dreamerAnswers, totalDreamer);
    } else if (letter === "a") {
      setTotalSelf(totalSelf + 1);
      value.selfAnswers.push(letter);
      console.log(value.selfAnswers, totalSelf);
    } else {
      setTotalAction(totalAction + 2);
      value.actionAnswers.push(letter);
      console.log(value.actionAnswers, totalAction);
    }
    // if (checkedAnswer.charAt(0) === value.dreamerAnswers[checkedNumber]) {
    //   value.totalDreamer = totalDreamer;
    //   setTotalDreamer(totalDreamer + 3);
    //   console.log(totalDreamer);
    // } else if (checkedAnswer.charAt(0) === value.actionAnswers[checkedNumber]) {
    //   setTotalAction(totalAction + 3);
    //   value.totalAction = totalAction;
    //   console.log(totalAction);
    // } else {
    //   setTotalSelf(totalSelf + 1);
    //   console.log(totalSelf);
    // }
    setAnswered(true);
    value.answered = answered;
  };

  const newQuestions = testQuestions.map((q, index) => {
    // let answer = q.correctAnswer;
    let qNumber = q.id;

    if (value.display === true) {
      return (
        <div key={index} id={qNumber}>
          <h3 className="question my-4">
            {qNumber}. {q.name}
          </h3>
          <form>
            <div className="input-group justify-content-center">
              <div className="input-group-lg">
                {q.answers.map((answer, i) => {
                  return (
                    <div className="radio btn-group" key={i}>
                      <label
                        htmlFor="season"
                        className="btn btn-secondary mx-3"
                      >
                        <input
                          type="radio"
                          name="season"
                          value={answer}
                          id={qNumber}
                          onClick={handleCheckAnswer}
                          required
                        />
                        {answer}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
      );
    } else if (value.display !== true) {
      return (
        <div key={index} className="correct">
          <p>Time is Up - Click Below to see your score</p>
        </div>
      );
    }
  });

  useEffect(() => {
    if (value.display !== true) {
      return newQuestions;
    }
  }, [newQuestions, value.display]);

  return (
    <div className="questions">
      {newQuestions}

      <div className="score-check">
        <Link to="/results">
          <button className="btn-primary my-4 btn-lg">Check Your Score</button>
        </Link>
      </div>
    </div>
  );
};

export default Questions;
