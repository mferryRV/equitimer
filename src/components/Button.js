import "./Button.css";

const Button = ({ text, onClick = () => {}, isActive = false }) => (
  <div
    className={`Button btn-primary subtitle${
      isActive ? " btn-primary-active" : ""
    }`}
    onClick={onClick}
  >
    {text}
  </div>
);

export default Button;
