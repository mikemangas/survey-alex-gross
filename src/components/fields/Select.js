import './Select.css';

export default function Select({ data, onChange, className }) {
  return (
    <div className={className}>
      <select defaultValue="" onChange={(event) => onChange(event)}>
        <option value="" disabled>
          Please chose your country
        </option>
        {data.map((el, index) => {
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
