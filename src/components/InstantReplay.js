import "./InstantReplay.css";

const InstantReplay = ({ events }) => (
  <div className="Instant-replay">
    <div className="subtitle">Instant Replay</div>
    <ul>
      {events.map(({ timeElapsed, speaker }) => (
        <li>
          Speaker {speaker} @ {timeElapsed}
        </li>
      ))}
    </ul>
  </div>
);

export default InstantReplay;
