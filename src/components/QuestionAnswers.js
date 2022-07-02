import Field from './Field';
// import React, { useState } from 'react';

export default function QuestionAnswers({ questionsAnswers, position, className, selectedValue }) {
  const { question, answers, type } = questionsAnswers[position];

  return (
    <div className={className}>
      <p>Question: {position + 1}</p>
      <p>{question}</p>
      <Field answers={answers} question={question} type={type} selectedValue={selectedValue} />
    </div>
  );
}
