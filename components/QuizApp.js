import React, { Fragment, useState } from "react";
import { QuizData } from "@/utils/quizdata";
import QuizResult from "./QuizResult";
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll=()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setClickOption(0)
    setScore(0)
  } 
  return (
    <Fragment>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalscore={QuizData.length} tryAgain={resetAll}/>
        ) : (
          <Fragment>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}</span>
              <span id="question-text">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="options-container">
              {QuizData[currentQuestion].options.map((options, i) => {
                return (
                  <button
                    // className='option-btn'
                    className={`option-btn ${
                      clickedOption == i + 1 ? "checked" : null
                    }  `}
                    key={i}
                    onClick={() => setClickOption(i + 1)}
                  >
                    {options}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              id="next-button"
              value="next"
              onClick={changeQuestion}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default QuizApp;
