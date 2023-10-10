import "./Warning.css";

const Warning = ({ isShown = false, text }) => (
  <div class="Warning">{isShown && <span>{text}</span>}</div>
);

export default Warning;
