import './Button.css';
export default function Button({ className, content, onClick, icon, dark, left }) {
  return (
    <button className={`Button ${dark ? 'Button--dark ' : 'Button--light '}` + className} onClick={onClick}>
      {left && icon}
      {content}
      {!left && icon}
    </button>
  );
}
