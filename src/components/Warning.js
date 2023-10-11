import "./Warning.css";

const Warning = ({ isShown = false, text }) => (
  <div className="Warning">{isShown && <span>{text}</span>}</div>
);

export default Warning;
