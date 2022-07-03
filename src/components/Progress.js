import React from 'react';
export default function Progress({ progress, currentQuestion, questionsAnswers, className, borderRadius, height }) {
  const outterStyles = {
      height: height ? height : 14,
      backgroundColor: 'black',
      borderColor: '#767676',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: borderRadius ? borderRadius : 50,
      marginLeft: 50,
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
