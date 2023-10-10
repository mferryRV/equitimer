import { useNavigate } from "react-router-dom";
import "./Team.css";
import Container from "../components/Container";
import Button from "../components/Button";

const Team = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button text="Test" onClick={() => navigate("/")} />
    </Container>
  );
};

export default Team;
