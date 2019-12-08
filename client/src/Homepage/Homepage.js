import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import QuizContext from "../QuizContext/QuizContext";
import { Link } from "react-router-dom";

import "./Homepage.css";

const Homepage = () => {
  const value = useContext(QuizContext);
  const [testName, setTestName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleNameChange = e => {
    e.preventDefault();

    value.testName = testName;

    console.log(
      "houseguest is",
      testName,
      "context houseGuest is",
      value.testName
    );

    setWelcomeMessage(() => {
      return (
        <div className="start-quiz p-4 flex-column ">
          <h3 className="col-xs-4 mt-55 my-2 mx-4">
            Welcome {testName}, you may now start the quiz
          </h3>
          <Link to="/quiz">
            <button
              className="btn btn-success btn-outline-light text-center mt-55 my-2 mx-4"
              type="submit"
            >
              Start Now
            </button>
          </Link>
        </div>
      );
    });

    return welcomeMessage;
  };

  return (
    <div className="home mb-10 d-flex flex-lg-column">
      <h2 className="mt-2 shadow-sm text-center w-100 h-100">Provided By: </h2>
      <div className="intro row justify-content-center mb-10 mt-10">
        <p className="col-md-2 mt-6">See how much of a minimalist you are</p>
      </div>
      <div className="start d-flex justify-content-center rounded-lg form-group">
        <form onSubmit={handleNameChange}>
          <label className="houseGuest" htmlFor="houseGuest" name="houseGuest">
            <h3 className="my-3">Enter Your Name</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name here"
              onChange={e => setTestName(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="mx-15" onSubmit={handleNameChange}>
            Enter
          </button>
        </form>
        <br />
      </div>
      <div className="d-flex justify-content-center">{welcomeMessage}</div>
    </div>
  );
};

export default withRouter(Homepage);
