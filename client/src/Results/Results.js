import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import QuizContext from "../QuizContext/QuizContext";
import { Link } from "react-router-dom";
import ResultMeter from "../Meter/ResultMeter";
import "./Results.css";

const Results = () => {
  const value = useContext(QuizContext);
  const [status, setStatus] = useState("");

  const checkStatus = () => {
    let score = value.totalYes - value.totalNo;
    switch (true) {
      case score > 11:
        setStatus(
          "You are highly functionally independent. However, depending on your age and health status, consider preparing for the future as soon as possible. You can start by talking with your family members about your future care. Because longterm care can be costly, advice from your accountant and a geriatric attorney would be advisable."
        );
        break;
      case score > 8:
        setStatus(
          "You may not need higher levels of assistance on a regular basis right now. However, you could use some assistance in some aspects of your life on an intermittent basis, perhaps with the assistance of family or friends. Consider remote home care, or adult daycare as well, where assistance can be provided for most of the day"
        );
        break;
      case score > 6:
        setStatus(
          "You might consider independent care where limited health services can be provided, as well as making your lifestyle much easier to handle. Another recommended could be that a close family member should move in with you. Consider remote home care, or adult daycare as well, where assistance can be provided for most of the day"
        );
        break;
      default:
        setStatus(
          "You may need to consider a nursing care facility. With your limited ability to carry on your ADLs, full time nursing care may be the best option."
        );
        break;
    }
  };

  return (
    <div className="container text-center w-50 h-50 ">
      <div className="quiz-results justify-context-center p-20">
        <h4 className="mb-30 mt-30">Let's see how you did {value.testName}</h4>
        <p className="text-success bg-light h-50">
          Your score is {value.totalYes}
        </p>
        <button onClick={checkStatus}>See Your Status</button>
        <ResultMeter />
        <div className="status-display">{status}</div>
        <div className="more-info">
          <h4>
            If you would like more information on these results, check out our{" "}
            <span>
              <a href="http://www.Eldercarechannel.com">website</a>
            </span>{" "}
            or call 636-535-1180
          </h4>
        </div>
        <Link to="/quiz">
          <button className="my-3">Try Again</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Results);
