import "./InputContainer.css";

const InputContainer = ({ headline, children }) => (
  <div class="Input">
    <div class="title">{headline}</div>
    {children}
  </div>
);

export const Warning = ({ isShown = false, text }) => (
  <div class="Warning">{isShown && <span>{text}</span>}</div>
);

export default InputContainer;
