import React, { useContext } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import QuizContext from "../QuizContext/QuizContext";

const ResultMeter = () => {
  const value = useContext(QuizContext);
  let score = value.totalYes - value.totalNo;
  const midValue = 1;
  const maxValue = 16;
  const answerSegments = 5;
  console.log(score);

  return (
    <div className="results">
      <ReactSpeedometer
        width={500}
        height={300}
        minValue={midValue}
        maxValue={maxValue}
        segments={answerSegments}
        value={score}
      />
    </div>
  );
};

export default ResultMeter;
