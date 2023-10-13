import { formatSpeakerName } from "../utils";
import "./TeamBarChart.css";

const TeamBarChart = ({ teamTimers }) => (
  <div className="Team-bar">
    {teamTimers.map((timer, i) => {
      return i > 0 ? (
        <div className="temp-bar" key={i + 1}>
          {formatSpeakerName(i)}: {timer} seconds
        </div>
      ) : (
        false
      );
    })}
  </div>
);

export default TeamBarChart;
