import './Survey.css';
import React, { useState } from 'react';
import Button from '../components/Button';
import QuestionAnswers from '../components/surveyviews/QuestionAnswers';
import ShowScore from '../components/surveyviews/ShowScore';
import InitialView from '../components/surveyviews/InitialView';
import Progress from '../components/Progress';
import ArrowLeft from '../assets/ArrowLeft';
import ArrowCircleRight from '../assets/ArrowCircleRight.';
import { surveyContent } from '../data/surveyContent';
import { calculateScore } from '../helpers/calculateScore';
import { calculateProgress } from '../helpers/calculateProgress';
const { title, lorem, startSurvey, questionsAnswers, next, back, surveyFor, enterName } = surveyContent;

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(-1),
    [showScore, setShowScore] = useState(false),
    [isSurveyStarted, setIsSurveyStarted] = useState(false),
    [buttonText, setButtonText] = useState(startSurvey),
    [value, setValue] = useState(),
    [result, setResult] = useState([]),
    [score, setScore] = useState(0),
    [name, setName] = useState(),
    [circle, setCircle] = useState(false),
    [radioDefault, setRadioDefault] = useState(true),
    progress = calculateProgress(questionsAnswers.length, currentQuestion);
  const handleButtonClick = (param) => {
    const newResult = [...result];
    if (currentQuestion === 0) {
      setCircle(true);
    } else {
      setCircle(false);
    }
    if (param === 'next' && currentQuestion + 1 < questionsAnswers.length) {
      buttonText !== next && setButtonText(next);
      if (isSurveyStarted) {
        console.log('curr questioN;', currentQuestion);

        if (value) {
          setRadioDefault(!radioDefault);
          setCurrentQuestion(currentQuestion + 1);
          newResult.push(value);
          if (value.question === enterName) {
            setName(value.answer);
          }
          setValue();
        } else {
          alert('Cannot be empty');
        }
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsSurveyStarted(true);
      }
      if (value && currentQuestion === questionsAnswers.length - 2) {
        setButtonText('FINISH');
      }
    } else if (param === 'back' && currentQuestion - 1 < questionsAnswers.length) {
      if (currentQuestion - 1 < 0) {
        setIsSurveyStarted(false);
      }
      if (currentQuestion !== questionsAnswers.length - 2) {
        setButtonText(next);
      }
      setCurrentQuestion(currentQuestion - 1);
      newResult.pop();
    } else if (value) {
      calculateScore(result);
      setShowScore(true);
      result.push(value);
      setScore(calculateScore(result));
    }
    setResult(newResult);
  };
  const handleResetButton = () => {
    setResult([]);
    setShowScore(false);
    setIsSurveyStarted(false);
    setCurrentQuestion(-1);
    setName(false);
  };

  return (
    <div className="Survey">
      {!isSurveyStarted ? (
        <InitialView
          title={title}
          p={lorem}
          buttonContent={[startSurvey, <ArrowCircleRight color="black" />]}
          onClick={handleButtonClick}
          divClassName="Survey--wrapper"
          titleClassName="Survey--title"
          pClassName="Survey--content"
          buttonClassName="Survey--button"
          buttonWrapperName="Survey--buttonWrapper "
        />
      ) : !showScore ? (
        <div className="Survey--wrapper">
          {result.length > 0 && !showScore && (
            <div className="Survey--surveyFor">
              {surveyFor}: {name}
            </div>
          )}
          <QuestionAnswers
            className="Survey--questionsAnswers"
            questionsAnswers={questionsAnswers}
            questionText="Survey--questionText"
            position={currentQuestion}
            selectedValue={setValue}
            radioDefault={radioDefault}
            firstQuestionClass="Survey--firstQuestion"
            titleClassName="Survey--titleClass"
            circle={circle}
          />
          <div className="Survey--buttonWrapper Survey--button--initial">
            <Button
              className="Survey--button"
              content={buttonText.toUpperCase()}
              onClick={() => handleButtonClick('next')}
              icon={<ArrowCircleRight color="black" />}
            />
            <Button
              dark
              left
              className="Survey--button"
              content={back.toUpperCase()}
              onClick={() => handleButtonClick('back')}
              icon={<ArrowLeft color="white" />}
            />
          </div>
          {result.length > 0 && !showScore && (
            <Progress
              className="Survey--progress-wrapper"
              currentQuestion={currentQuestion}
              questionsAnswers={questionsAnswers}
              progress={progress}
            />
          )}
        </div>
      ) : (
        <ShowScore name={name} score={score} buttonContent="START NEW" onClick={handleResetButton} />
      )}
    </div>
  );
}
