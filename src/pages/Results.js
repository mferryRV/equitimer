import "./Results.css";
import Container from "../components/Container";
import InstantReplay from "../components/InstantReplay";
import GiniCoefficient from "../components/GiniCoefficient";

const content = {
  headline: "Your results",
};

const Results = ({ results, teamSize }) => (
  <Container>
    <div className="Results">
      <div className="title">{content.headline}</div>
      <GiniCoefficient teamTimers={results.teamTimers} />
      {/* <TeamBarChart teamTimers={results.teamTimers} /> */}
      <InstantReplay teamSize={teamSize} events={results.events} />
    </div>
  </Container>
);

export default Results;
