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
      <div className="Flow">
        <Headlines headline={headline} subheadline={subheadline} />
        <div className="Input">
          <div className="title">{inputTitle}</div>
          {children}
        </div>
        <div className="Sticky">
          <Button text={cta} onClick={() => navigate(nextPage)} />
        </div>
      </div>
    </Container>
  );
};

export default FlowPage;
