import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import "./Home.css";
import Container from "../components/Container";
import Headlines from "../components/Headlines";
import Button from "../components/Button";

const content = {
  headline: "Great teams share time",
  subheadline:
    "Protect your most valuable resource with feedback from Aristimer",
  cta: "Measure my meeting",
};

const nextPage = "/setup/team/";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div class="Hero">
        <img class="Hero-image" src={logo} />
        <Headlines
          headline={content.headline}
          subheadline={content.subheadline}
        />
        <Button text={content.cta} onClick={() => navigate(nextPage)} />
      </div>
    </Container>
  );
};

export default Home;
