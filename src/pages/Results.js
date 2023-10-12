import "./Results.css";
import Container from "../components/Container";
import InstantReplay from "../components/InstantReplay";

const content = {
  headline: "Your results",
};

const Results = ({ results, teamSize }) => (
  <Container>
    <div className="Results">
      <div className="title">{content.headline}</div>
      <InstantReplay teamSize={teamSize} events={results.events} />
      {/* <GiniCoefficient teamTimers={results.teamTimers} />
      <TeamBarChart teamTimers={results.teamTimers} /> */}
    </div>
  </Container>
);

export default Results;
