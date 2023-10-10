import "./Duration.css";
import { TextField } from "monday-ui-react-core";
import FlowPage from "../../components/FlowPage";

const content = {
  headline: "Time is limited",
  subheadline: "Specify the meeting duration to anticipate sharing issues",
  inputTitle: "Meeting duration",
  cta: (m, s) => `Start ${m}m${s}s timer`,
};

const nextPage = "/";

const clean = (val) => (isNaN(parseInt(val)) ? 0 : parseInt(val));

const Team = ({ durationSec, setDurationSec }) => {
  const minutes = Math.floor(durationSec / 60);
  const seconds = durationSec % 60;

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
      <TextField
        type={TextField.types.NUMBER}
        value={minutes}
        size={TextField.sizes.LARGE}
        onChange={handleChangeMin}
        maxLength={3}
      />
      :
      <TextField
        type={TextField.types.NUMBER}
        value={seconds}
        size={TextField.sizes.LARGE}
        onChange={handleChangeSec}
        maxLength={2}
      />
    </FlowPage>
  );
};

export default Team;
