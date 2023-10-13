import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Timer.css";
import { pathMap } from "../Routes";
import Container from "../components/Container";
import Clock from "../components/Clock";
import Button from "../components/Button";
import Speaker from "../components/Speaker";

const intervalSec = 1;

const content = {
  headline: "Time remaining",
  helpTextStart: "Tap a speaker to start",
  helpTextContinue: "Tap a team member when they speak",
  noSpeakerButton: (time) => `Non-speaking time: ${time}s`,
  endButton: "End meeting",
};

const nextPage = pathMap.Results;

const Timer = ({ teamSize, durationSec, setResults }) => {
  const navigate = useNavigate();

  const [timer, setMainTimer] = useState(durationSec);
  const timeElapsed = durationSec - timer;

  const [isPaused, setPaused] = useState(true);

  // Create a timer for each team member and one for shared time
  const [teamTimers, setTeamTimers] = useState(Array(teamSize + 1).fill(0));

  // Save the index of the current speaker, where 0 is nobody
  const [speaker, setSpeaker] = useState(0);

  // Make a list of speaker change events
  const [events, setEvents] = useState([]);

  const newEvent = (timeElapsed, speaker) => ({ timeElapsed, speaker });

  const [noSpeaker, ...speakerTimers] = teamTimers;

  const setTimer = (seconds) => {
    // Update the overall timer
    setMainTimer(seconds);
    // Add time for the current speaker
    const newTeamTimers = teamTimers.map((time, index) =>
      !isPaused && index === speaker ? time + intervalSec : time
    );
    setTeamTimers(newTeamTimers);
  };

  const handleSpeakerChange = (newSpeaker) => {
    // Update the speaker
    setSpeaker(newSpeaker);
    // Record the change
    setEvents([...events, newEvent(timeElapsed, newSpeaker)]);
    // Unpause the timer
    if (isPaused) {
      setPaused(false);
    }
  };

  const isSpeakerActive = (i) => !isPaused && speaker === i;

  const helpText =
    speaker > 0 || timeElapsed > 0
      ? content.helpTextContinue
      : content.helpTextStart;

  const endMeeting = () => {
    // Store results, including the end event
    setResults({
      events: [...events, newEvent(timeElapsed, speaker)],
      teamTimers,
    });

    navigate(nextPage);
  };

  return (
    <Container>
      <div className="Timer">
        <div className="clock-container">
          <div className="title">{content.headline}</div>
          <Clock
            isPaused={isPaused}
            intervalSec={intervalSec}
            timer={timer}
            setTimer={setTimer}
          />
          <div className="help-text">{helpText}</div>
        </div>
        <div className="Speaker-grid">
          {speakerTimers.map((time, i) => (
            <Speaker
              key={`participant-${i + 1}`}
              speakerIndex={i + 1}
              timeElapsed={timeElapsed}
              speakerTimer={time}
              isActive={isSpeakerActive(i + 1)}
              onClick={() => handleSpeakerChange(i + 1)}
            />
          ))}
        </div>
        <div className="btn-row-1">
          <Button
            text={content.noSpeakerButton(noSpeaker)}
            isActive={isSpeakerActive(0)}
            onClick={() => handleSpeakerChange(0)}
          />
          <Button
            leftIcon={isPaused ? "play_arrow" : "pause"}
            onClick={() => setPaused(!isPaused)}
          />
        </div>
        <Button text={content.endButton} onClick={endMeeting} />
      </div>
    </Container>
  );
};

export default Timer;
