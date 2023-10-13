import "./GiniCoefficient.css";
import exampleTeamTimers from "../data/exampleTeamTimers.json";
import countryGinis from "../data/giniCoefficients.json";

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

  return Math.round((100 * (idealArea - actualArea)) / idealArea, 2) / 100;
};

const GiniCoefficient = ({ teamTimers }) => {
  const timers = teamTimers.length > 0 ? teamTimers : exampleTeamTimers;
  const giniCoefficient = getGiniCoefficient(timers);
  const comparison = countryGinis
    .filter(({ gini }) => gini > giniCoefficient)
    .reverse()[0];
  const worldMinimum = Math.min(...countryGinis.map(({ gini }) => gini));
  const worldMaximum = Math.max(...countryGinis.map(({ gini }) => gini));

  const feedback =
    giniCoefficient > worldMaximum
      ? `Your conversation was less equitable than the wealth of ${countryGinis[0].country}.`
      : `Your conversation was more equitable than the wealth of ${
          giniCoefficient < worldMinimum
            ? "any country on earth"
            : countryGinis[1].country
        }.`;

  return (
    <div className="Gini">
      <div className="subtitle">Gini coefficient: {giniCoefficient}</div>
      <div>{feedback}</div>
    </div>
  );
};

export default GiniCoefficient;
