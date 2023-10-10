import "./Duration.css";
import { TextField } from "monday-ui-react-core";
import { pathMap } from "../../Routes";
import { parseMinSec } from "../../utils";
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

  const updateDuration = (m = 0, s = 0) => setDurationSec(m * 60 + s);

  const handleChangeMin = (value) => updateDuration(clean(value), seconds);
  const handleChangeSec = (value) => updateDuration(minutes, clean(value));

  return (
    <FlowPage
      headline={content.inputTitle}
      subheadline={content.subheadline}
      inputTitle={content.inputTitle}
      cta={content.cta(minutes, seconds)}
      nextPage={nextPage}
    >
      <div class="Clock">
        <TextField
          type={TextField.types.NUMBER}
          value={minutes}
          size={TextField.sizes.LARGE}
          onChange={handleChangeMin}
          maxLength={3}
        />
        <div class="Clock-colon">:</div>
        <TextField
          type={TextField.types.NUMBER}
          value={seconds}
          size={TextField.sizes.LARGE}
          onChange={handleChangeSec}
          maxLength={2}
        />
      </div>
    </FlowPage>
  );
};

export default Team;
