import "./InputContainer.css";

const InputContainer = ({ headline, children }) => (
  <div class="Input">
    <div class="title">{headline}</div>
    {children}
  </div>
);

export default InputContainer;
