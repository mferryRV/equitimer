import "./Button.css";

const Button = ({
  leftIcon,
  text,
  rightIcon,
  onClick = () => {},
  isActive = false,
}) => (
  <div
    className={`Button btn-primary subtitle${
      isActive ? " btn-primary-active" : ""
    }`}
    onClick={onClick}
  >
    {leftIcon && <i className="material-icons">{leftIcon}</i>}
    {text}
    {rightIcon && <i className="material-icons">{rightIcon}</i>}
  </div>
);

export default Button;
