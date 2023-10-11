import { useState } from "react";
import "./Timer.css";
import Container from "../components/Container";
import Clock from "../components/Clock";
import Button from "../components/Button";
import Speaker from "../components/Speaker";

const intervalSec = 1;

const Timer = ({ teamSize, durationSec }) => {
  const [timer, setMainTimer] = useState(durationSec);
  const [isPaused, setPaused] = useState(true);

  const timeElapsed = durationSec - timer;

  // Create a timer for each team member and one for shared time
  const [teamTimers, setTeamTimers] = useState(
    Array.from({ length: teamSize + 1 }, () => 0)
  );
  // Save the index of the current speaker, where 0 is nobody
  const [speaker, setSpeaker] = useState(0);

  const setTimer = (seconds) => {
    // Update the overall timer
    setMainTimer(seconds);
    // Add time for the current speaker
    const newTeamTimers = teamTimers.map((time, index) =>
      !isPaused && index === speaker ? time + intervalSec : time
    );
    setTeamTimers(newTeamTimers);
  };

  // Make a list of speaker change events
  const [events, setEvents] = useState([]);

  const handleSpeakerChange = (newSpeaker) => {
    // Update the speaker
    setSpeaker(newSpeaker);
    // Record the change
    setEvents([...events, { timer, newSpeaker }]);
    // Unpause the timer
    if (isPaused) {
      setPaused(false);
    }
  };

  return (
    <Container>
      <div className="Timer">
        <div className="title">Time remaining</div>
        <Clock
          isPaused={isPaused}
          intervalSec={intervalSec}
          timer={timer}
          setTimer={setTimer}
        />
        {teamTimers.map((time, i) => (
          <Speaker
            key={`participant-${i}`}
            speakerIndex={i}
            timeElapsed={timeElapsed}
            speakerTimer={time}
            onClick={() => handleSpeakerChange(i)}
          />
        ))}
        <Button
          text={isPaused ? "Start timer" : "Pause timer"}
          onClick={() => setPaused(!isPaused)}
        />
      </div>
    </Container>
  );
};

export default Timer;
