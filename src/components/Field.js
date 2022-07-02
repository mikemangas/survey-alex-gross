export default function Field({ type, answers, question, selectedValue }) {
  const handleChange = (event) => {
    selectedValue({ question, answer: event.target.value });
  };

  if (type === 'text') {
    return <input type={type} onChange={(event) => handleChange(event)} />;
  } else if (type === 'checkbox') {
    return answers.map((el, index) => {
      return (
        <div key={index}>
          <input
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
    });
  } else if (type === 'select') {
    return (
      <select onChange={(event) => handleChange(event)}>
        {answers.map((el, index) => {
          return (
            <option key={index} value={el.answer}>
              {el.answer}
            </option>
          );
        })}
      </select>
    );
  }
}
