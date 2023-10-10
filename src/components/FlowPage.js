import { useNavigate } from "react-router-dom";
import "./FlowPage.css";
import Button from "../components/Button";
import Container from "../components/Container";
import Headlines from "../components/Headlines";

const FlowPage = ({
  headline,
  subheadline,
  inputTitle,
  cta,
  nextPage,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div class="Flow">
        <Headlines headline={headline} subheadline={subheadline} />
        <div class="Input">
          <div class="title">{inputTitle}</div>
          {children}
        </div>
        <div class="Sticky">
          <Button text={cta} onClick={() => navigate(nextPage)} />
        </div>
      </div>
    </Container>
  );
};

export default FlowPage;
