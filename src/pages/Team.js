import "./Team.css";
import { Slider } from "monday-ui-react-core";
import FlowPage from "../components/FlowPage";
import Warning from "../components/Warning";

const content = {
  headline: "Everyone deserves time to speak",
  subheadline:
    "Teams that share time evenly perform higher on tests of problem-solving.",
  inputTitle: "Team members",
  inputWarning: "Sharing is harder with 12+",
  cta: (teamSize) => `Time ${teamSize} participants`,
};

const nextPage = "/";

const inputSettings = {
  min: 2,
  max: 12,
  step: 1,
};

const Team = ({ teamSize, setTeamSize }) => (
  <FlowPage
    headline={content.inputTitle}
    subheadline={content.subheadline}
    inputTitle={content.inputTitle}
    cta={content.cta(teamSize)}
    nextPage={nextPage}
  >
    <Slider
      indicateSelection={true}
      defaultValue={teamSize}
      step={inputSettings.step}
      min={inputSettings.min}
      max={inputSettings.max}
      size={Slider.sizes.LARGE}
      valueFormatter={(value) => `${value}`}
      onChange={(val) => setTeamSize(val)}
    />
    <Warning
      isShown={teamSize == inputSettings.max}
      text={content.inputWarning}
    />
  </FlowPage>
);

export default Team;
