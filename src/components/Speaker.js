import "./Speaker.css";
import logo from "../img/logo.svg";
import { leftPadNum, parseMinSec } from "../utils";

const content = {
  defaultName: (idx) => `#${idx}`,
  imgAlt: "Placeholder",
};

const Speaker = ({
  speakerIndex,
  name,
  timeElapsed,
  speakerTimer,
  isActive,
  onClick = () => {},
}) => {
  const speakerName = name || content.defaultName(speakerIndex);
  const [min, sec] = parseMinSec(speakerTimer);

  const displayTimer = leftPadNum(min) + "m" + leftPadNum(sec) + "s";
  // Percent of time taken by speaker so far
  const speakerPercent =
    leftPadNum(Math.floor((100 * speakerTimer) / (timeElapsed || 1))) + "%";

  return (
    <div
      className={`Speaker Color-${speakerIndex} ${
        isActive ? "spk-active" : ""
      }`}
      onClick={onClick}
    >
      <div className="Speaker-name">{speakerName}</div>
      <img className="Speaker-image" alt={content.imgAlt} src={logo} />
      <div className="Speaker-data">
        <div>{speakerPercent}</div>
        <div>{displayTimer}</div>
      </div>
    </div>
  );
};

export default Speaker;
