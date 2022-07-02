export default function Button({ className, content, onClick, icon }) {
  return (
    <button className={className} onClick={onClick}>
      {content}
      {icon}
    </button>
  );
}
