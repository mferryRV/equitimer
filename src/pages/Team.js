import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Team.css";
import { Slider } from "monday-ui-react-core";
import Button from "../components/Button";
import Container from "../components/Container";
import InputContainer, { Warning } from "../components/InputContainer";
import Headlines from "../components/Headlines";

const content = {
  headline: "Everyone deserves time to speak",
  subheadline:
    "Teams that share time evenly perform higher on tests of problem-solving.",
  inputTitle: "Team members",
  inputWarning: "Sharing is harder with 12+",
  cta: (teamSize) => `Time ${teamSize} participants`,
};

const inputSettings = {
  min: 2,
  default: 2,
  max: 12,
  step: 1,
};

const Team = () => {
  const navigate = useNavigate();
  const [teamSize, setTeamSize] = useState(inputSettings.default);

  return (
    <Container>
      <div class="Flow">
        <Headlines
          headline={content.headline}
          subheadline={content.subheadline}
        />
        <InputContainer headline={content.inputTitle}>
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
        </InputContainer>
        <Button text={content.cta(teamSize)} onClick={() => navigate("/")} />
      </div>
    </Container>
  );
};

export default Team;
