import "./Button.css";

const Button = ({ text, onClick = () => {} }) => (
  <div className="Button primary subtitle" onClick={onClick}>
    {text}
  </div>
);

export default Button;
