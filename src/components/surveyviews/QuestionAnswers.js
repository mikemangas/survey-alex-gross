import Field from '../fields/Field';
import React, { useState } from 'react';

export default function QuestionAnswers({
  questionsAnswers,
  position,
  className,
  selectedValue,
  radioDefault,
  titleClassName,
  firstQuestionClass,
  questionText,
  circle,
}) {
  const { question, answers, type } = questionsAnswers[position];
  const [val, setVal] = useState();
  selectedValue(val);

  return (
    <div className={className}>
      {position > 0 ? (
        <h4 className={questionText}> Question {position}</h4>
      ) : (
        <h4 className={firstQuestionClass}>{questionsAnswers[0]?.title}</h4>
      )}
      <h2 className={titleClassName}>{question}</h2>
      <Field
        answers={answers}
        question={question}
        type={type}
        value={setVal}
        radioDefault={radioDefault}
        circle={circle}
      />
    </div>
  );
}
