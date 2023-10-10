import { useState } from "react";
import "./Timer.css";
import Container from "../components/Container";
import Clock from "../components/Clock";
import Button from "../components/Button";

const Timer = ({ teamSize, durationSec }) => {
  const [timer, setTimer] = useState(durationSec);
  const [isPaused, setPaused] = useState(true);

  return (
    <Container>
      <div class="Timer">
        <div class="title">Time remaining</div>
        <Clock isPaused={isPaused} timer={timer} setTimer={setTimer} />
        <Button
          text={isPaused ? "Start timer" : "Pause timer"}
          onClick={() => setPaused(!isPaused)}
        />
      </div>
    </Container>
  );
};

export default Timer;
