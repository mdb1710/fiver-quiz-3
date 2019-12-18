import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import QuizContext from "../QuizContext/QuizContext";
import { Link } from "react-router-dom";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import "./Results.css";

const Results = () => {
  const value = useContext(QuizContext);
  const [status, setStatus] = useState("");

  const shareUrl = "https://www.google.com";

  const checkStatus = () => {
    let answers = value.userAnswers;
    switch (true) {
      case answers[3] === "b":
        setStatus("You are a dreamer");
        break;
      case answers[3] > "a":
        setStatus("You are self absorbed");
        break;

      default:
        setStatus("You ");
        break;
    }
  };

  return (
    <div className="container text-center w-50 h-50 ">
      <div className="quiz-results justify-context-center p-20">
        <h4 className="mb-30 mt-30">Let's see how you did {value.testName}</h4>
        <p className="text-success bg-light h-50">
          Your answers were {value.userAnswers}
        </p>
        <button onClick={checkStatus}>See Your Status</button>

        <div className="status-display">{status}</div>
        <div className="status-share">
          <h4>Share Your Status With Others</h4>

          <FacebookShareButton
            url={shareUrl}
            quote={status}
            hashtag={"#minimalistquiz"}
          >
            <FacebookIcon size={32} round={true} /> Share on Facebook
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl} quote={status}>
            <TwitterIcon size={32} round={true} /> Share on Twitter
          </TwitterShareButton>
        </div>

        <Link to="/quiz">
          <button className="my-3">Try Again</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Results);
