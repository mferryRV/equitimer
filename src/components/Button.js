import "./Button.css";

const Button = ({ text, onClick = () => {} }) => (
  <div class="Button primary subtitle" onClick={onClick}>
    {text}
  </div>
);

export default Button;
