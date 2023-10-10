import { useEffect } from "react";
import "./Clock.css";
import { leftPadNum, parseMinSec } from "../utils";

const Clock = ({ isPaused = true, timer, setTimer }) => {
  const [min, sec] = parseMinSec(timer);

  // Force reload to update timer
  useEffect(() => {
    const interval = setInterval(
      () => setTimer(isPaused ? timer : timer - 1),
      1000
    );

    return () => clearInterval(interval);
  }, [isPaused, timer, setTimer]);

  return <div class="Clock">{`${leftPadNum(min)}:${leftPadNum(sec)}`}</div>;
};

export default Clock;
