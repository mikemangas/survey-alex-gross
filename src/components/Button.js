import './Button.css';
export default function Button({ className, content, onClick, icon, dark }) {
  return (
    <button className={`Button ${dark ? 'Button--dark ' : 'Button--light '}` + className} onClick={onClick}>
      {content}
      {icon}
    </button>
  );
}
