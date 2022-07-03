import Button from './Button';

export default function InitialView({
  title,
  p,
  buttonContent,
  onClick,
  titleClassName,
  pClassName,
  buttonClassName,
  divClassName,
}) {
  return (
    <div className={divClassName}>
      <h1 className={titleClassName}>{title}.</h1>
      <p className={pClassName}>{p}</p>
      <Button className={buttonClassName} content={buttonContent} onClick={() => onClick('next')} />
    </div>
  );
}
