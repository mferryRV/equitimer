import "./Results.css";
import Container from "../components/Container";
import InstantReplay from "../components/InstantReplay";
import GiniCoefficient from "../components/GiniCoefficient";
import TeamBarChart from "../components/TeamBarChart";

const content = {
  headline: "Your results",
  defaultHeadline: "Example results",
};

const Results = ({ results, teamSize }) => (
  <Container>
    <div className="Results">
      <div className="title">
        {results.events.length > 0 ? content.headline : content.defaultHeadline}
      </div>
      <GiniCoefficient teamTimers={results.teamTimers} />
      <TeamBarChart teamTimers={results.teamTimers} />
      <InstantReplay teamSize={teamSize} events={results.events} />
    </div>
  </Container>
);

export default Results;
