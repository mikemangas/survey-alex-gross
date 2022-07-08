import './Radio.css';
export default function Radio({ data, onChange, defaultStatus, circle }) {
  const radioStyle = {
    borderRadius: circle ? 50 : 0,
  };

  return (
    <div className="Radio--wrapper">
      <input
        className="Radio--placeholder"
        name="checkbox"
        type="radio"
        value=""
        checked={defaultStatus ? true : false}
      />
      {data.map((el, index) => {
        return (
          <div className="Radio--miniWrapper" key={index}>
            <input
              style={radioStyle}
              type="radio"
              id={el.answer}
              name="checkbox"
              value={el.answer}
              onChange={(event) => onChange(event)}
            />
            <label htmlFor={el.answer}>{el.answer}</label>
          </div>
        );
      })}
    </div>
  );
}
