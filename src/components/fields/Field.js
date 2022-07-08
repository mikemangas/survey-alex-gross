import './Field.css';
import React, { useState, useEffect } from 'react';

import Radio from './Radio';
import Select from './Select';

export default function Field({ answers, question, type, value, radioDefault }) {
  const [defaultStatus, setDefaultStatus] = useState();

  useEffect(() => {
    radioDefault && setDefaultStatus(radioDefault);
  }, [radioDefault]);

  const handleChange = (event) => {
    value({ question, answer: event.target.value });
    if (type === 'radio') {
      setDefaultStatus(false);
    }
  };

  if (type === 'text') {
    return <input type={type} onChange={(event) => handleChange(event)} />;
  } else if (type === 'radio') {
    return <Radio data={answers} onChange={handleChange} defaultStatus={defaultStatus} />;
  } else if (type === 'select') {
    return <Select data={answers} onChange={handleChange} className="Field--select--wrapper" />;
  }
}
