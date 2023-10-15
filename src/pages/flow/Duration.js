import "./Duration.css";
import { TextField } from "monday-ui-react-core";
import { pathMap } from "../../Routes";
import { leftPadNum, parseMinSec } from "../../utils";
import FlowPage from "../../components/FlowPage";

const content = {
  headline: "Time is limited",
  subheadline: "Specify the meeting duration to anticipate sharing issues",
  inputTitle: "Meeting duration",
  cta: (m, s) => `Start ${m}m${s}s timer`,
};

const nextPage = pathMap.Timer;

const clean = (val) => (isNaN(parseInt(val)) ? 0 : parseInt(val));

const Team = ({ durationSec, setDurationSec }) => {
  const [minutes, seconds] = parseMinSec(durationSec);
  const paddedSeconds = leftPadNum(seconds);

  const updateDuration = (m = 0, s = 0) => setDurationSec(m * 60 + s);

  const handleChangeMin = (value) => updateDuration(clean(value), seconds);
  const handleChangeSec = (value) => updateDuration(minutes, clean(value));

  return (
    <FlowPage
      headline={content.headline}
      subheadline={content.subheadline}
      inputTitle={content.inputTitle}
      cta={content.cta(minutes, paddedSeconds)}
      nextPage={nextPage}
    >
      <div className="Duration-display">
        <TextField
          type={TextField.types.NUMBER}
          value={minutes}
          size={TextField.sizes.LARGE}
          onChange={handleChangeMin}
          maxLength={3}
        />
        <div className="Duration-display-colon">:</div>
        <TextField
          type={TextField.types.NUMBER}
          value={paddedSeconds}
          size={TextField.sizes.LARGE}
          onChange={handleChangeSec}
          maxLength={2}
        />
      </div>
    </FlowPage>
  );
};

export default Team;
