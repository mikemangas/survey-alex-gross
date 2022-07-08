import React from 'react';
export default function Progress({ progress, currentQuestion, questionsAnswers, className, borderRadius, height }) {
  const outterStyles = {
      height: height ? height : 14,
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: borderRadius ? borderRadius : 50,
    },
    fillerStyles = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: 'white',
      borderRadius: 'inherit',
      textAlign: 'right',
    },
    text = {
      textAlign: 'right',
      fontSize: '16px',
      color: '#767676',
      marginBottom: '8px',
    };

  return (
    <div className={className}>
      {currentQuestion && (
        <p style={text}>
          QUESTION {currentQuestion} OUT OF {questionsAnswers.length - 1}
        </p>
      )}

      <div style={outterStyles}>
        <div style={fillerStyles} />
      </div>
    </div>
  );
}
