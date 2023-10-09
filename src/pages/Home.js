import logo from "../img/logo.svg";
import "./Home.css";
import Container from "../components/Container";
import Button from "../components/Button";

const content = {
  headline: "Great teams share time",
  subheadline:
    "Protect your most valuable resource with feedback from Aristimer",
  cta: "Measure my meeting",
};

const Home = () => (
  <Container>
    <div class="Hero">
      <img class="Hero-image" src={logo} />
      <div>
        <div class="title">{content.headline}</div>
        <div class="subtitle">{content.subheadline}</div>
      </div>
      <Button text={content.cta} />
    </div>
  </Container>
);

export default Home;
