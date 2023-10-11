import { useEffect } from "react";
import "./Clock.css";
import { leftPadNum, parseMinSec } from "../utils";

const Clock = ({ isPaused = true, intervalSec = 1, timer, setTimer }) => {
  const [min, sec] = parseMinSec(timer);

  // Force reload to update timer
  useEffect(() => {
    const interval = setInterval(
      () => setTimer(isPaused ? timer : timer - 1),
      1000 * intervalSec
    );

    return () => clearInterval(interval);
  }, [isPaused, timer, setTimer]);

  return <div className="Clock">{`${leftPadNum(min)}:${leftPadNum(sec)}`}</div>;
};

export default Clock;
