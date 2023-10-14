import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import "./Home.css";
import { pathMap } from "../Routes";
import Container from "../components/Container";
import Headlines from "../components/Headlines";
import Button from "../components/Button";

const content = {
  headline: "Great teams share time",
  subheadline:
    "Protect your most valuable resource with feedback from Equitimer",
  imgAlt: "placeholder",
  cta: "Measure my meeting",
};

const nextPage = pathMap.Team;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="Hero">
        <img className="Hero-image" alt={content.imgAlt} src={logo} />
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
