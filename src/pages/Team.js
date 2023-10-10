import { useNavigate } from "react-router-dom";
import "./Team.css";
import Button from "../components/Button";
import Container from "../components/Container";
import InputContainer from "../components/InputContainer";
import Headlines from "../components/Headlines";

const content = {
  headline: "Everyone deserves time to speak",
  subheadline:
    "Teams that share time evenly perform higher on tests of problem-solving.",
  input: "Team members",
  cta: "Continue",
};

const Team = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div class="Flow">
        <Headlines
          headline={content.headline}
          subheadline={content.subheadline}
        />
        <InputContainer headline={content.input}>
          {content.input}
        </InputContainer>
        <Button text={content.cta} onClick={() => navigate("/")} />
      </div>
    </Container>
  );
};

export default Team;
