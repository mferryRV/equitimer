import "./GiniCoefficient.css";
import exampleTeamTimers from "../data/exampleTeamTimers.json";

const sum = (arr) => arr.reduce((total, val) => total + val, 0);

const getGiniCoefficient = (teamTimers) => {
  const [noSpeaker, ...speakingTimes] = teamTimers;
  // Order by speaking time
  speakingTimes.sort((a, b) => a - b);

  // Gini coefficient looks at the cumulative time taken by each person
  // And all people who spoke less than they did
  const perSpeakerTime = sum(speakingTimes) / speakingTimes.length;
  // Get the area in a world where everybody speaks exactly equally
  const idealArea =
    ((speakingTimes.length * (speakingTimes.length + 1)) / 2) * perSpeakerTime;
  // Get the area for our actual speakers
  const actualArea = speakingTimes.reduce(
    (area, time, i, speakingTimes) => area + sum(speakingTimes.slice(0, i + 1)),
    0
  );

  return Math.floor((100 * (idealArea - actualArea)) / idealArea);
};

const GiniCoefficient = ({ teamTimers }) => {
  const timers = teamTimers.length > 0 ? teamTimers : exampleTeamTimers;
  const giniCoefficient = getGiniCoefficient(timers);
  return <div className="Gini">Gini Coefficient: {giniCoefficient}</div>;
};

export default GiniCoefficient;
