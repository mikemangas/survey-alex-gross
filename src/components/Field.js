import './Field.css';
export default function Field({ type, answers, question, value }) {
  const handleChange = (event) => {
    value({ question, answer: event.target.value });
  };

  if (type === 'text') {
    return <input type={type} onChange={(event) => handleChange(event)} />;
  } else if (type === 'checkbox') {
    return (
      <div className="Field--checkbox--wrapper">
        {answers.map((el, index) => {
          return (
            <div className="Field--checkbox--miniWrapper" key={index}>
              <input
                className="Field--checkbox--input"
                type="checkbox"
                id={el.answer}
                name={el.answer}
                value={el.answer}
                onChange={(event) => handleChange(event)}
                //   checked={checkedState[index]}
              />
              <label htmlFor={el.answer}>{el.answer}</label>
            </div>
          );
        })}
      </div>
    );
  } else if (type === 'select') {
    return (
      <div className="Field--select--wrapper">
        <select onChange={(event) => handleChange(event)}>
          <option value="" disabled selected>
            Please chose your country
          </option>
          {answers.map((el, index) => {
            return (
              <option key={index} value={el.answer}>
                {el.answer}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
