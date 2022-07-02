import React, { useState } from 'react';
import Button from '../components/Button';
import QuestionAnswers from '../components/QuestionAnswers';
import { surveyContent } from '../data/surveyContent';
import { calculateScore } from '../helpers/calculateScore';
const { title, lorem, startSurvey, questionsAnswers, next, back } = surveyContent;

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [showScore, setShowScore] = useState(false);
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);
  const [buttonText, setButtonText] = useState(startSurvey);
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  const [score, setScore] = useState(0);

  const handleButtonClick = (param) => {
    const newResult = [...result];
    //PROBLEMS:
    // MANAGE WHAT TO DO IF UNDEFINED VALUE
    // MANAGE CHECKED
    // DISPLAY NAME FROM THE BEGINNING
    // QUESTION 1 out of 3
    // STYLE!!
    if (param === 'next' && currentQuestion + 1 < questionsAnswers.length) {
      setCurrentQuestion(currentQuestion + 1);
      buttonText !== next && setButtonText(next);
      if (isSurveyStarted) {
        newResult.push(value);
      } else {
        setIsSurveyStarted(true);
      }
    } else if (param === 'back' && currentQuestion - 1 < questionsAnswers.length) {
      if (currentQuestion - 1 < 0) {
        setIsSurveyStarted(false);
      }
      setCurrentQuestion(currentQuestion - 1);
      newResult.pop();
    } else {
      calculateScore(result);
      setShowScore(true);
      result.push(value);
      setScore(calculateScore(result));
    }
    setResult(newResult);
  };

  return (
    <div className="Survey">
      {showScore ? (
        <h1>YOUR SCORE IS {score}</h1>
      ) : !isSurveyStarted ? (
        <div>
          <h1 className="Survey--title">{title}.</h1>
          <p className="Survey--content">{lorem}</p>
          <Button className="Survey--button" content={startSurvey} onClick={() => handleButtonClick('next')} />
        </div>
      ) : (
        <div>
          <QuestionAnswers
            className="Survey--questionsAnswers"
            questionsAnswers={questionsAnswers}
            position={currentQuestion}
            selectedValue={setValue}
          />
          <Button className="Survey--button" content={back.toUpperCase()} onClick={() => handleButtonClick('back')} />
          <Button
            className="Survey--button"
            content={buttonText.toUpperCase()}
            onClick={() => handleButtonClick('next')}
          />
        </div>
      )}
      <div>BAR PERCENT: {'1 out of 3'}</div>
    </div>
  );
}
