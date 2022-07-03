import Field from './Field';
// import React, { useState } from 'react';

export default function QuestionAnswers({ questionsAnswers, position, className, selectedValue }) {
  const { question, answers, type } = questionsAnswers[position];

  return (
    <div className={className}>
      {position > 0 ? <h4>QUESTION {position}</h4> : <h4>{questionsAnswers[0]?.title.toUpperCase()}</h4>}
      <h2>{question}</h2>
      <Field answers={answers} question={question} type={type} value={selectedValue} />
    </div>
  );
}
