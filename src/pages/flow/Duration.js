import "./Duration.css";
import FlowPage from "../../components/FlowPage";

const content = {
  headline: "Time is limited",
  subheadline: "Specify the meeting duration to anticipate sharing issues",
  inputTitle: "Meeting duration",
  cta: "Start timer",
};

const nextPage = "/";

const NumberInput = ({
  defaultValue,
  updateValue,
  maxValue,
  maxLength = 3,
}) => {
  const clean = (val) => (isNaN(parseInt(val)) ? 0 : parseInt(val));

  return (
    <input
      defaultValue={defaultValue}
      type="number"
      max={maxValue}
      maxLength={maxLength}
      onInput={({ target: { value } }) => updateValue(clean(value))}
    />
  );
};

const Team = ({ durationSec, setDurationSec }) => {
  const minutes = Math.floor(durationSec / 60);
  const seconds = durationSec % 60;

  const updateDuration = (m = 0, s = 0) => setDurationSec(m * 60 + s);

  return (
    <FlowPage
      headline={content.inputTitle}
      subheadline={content.subheadline}
      inputTitle={content.inputTitle}
      cta={content.cta}
      nextPage={nextPage}
    >
      <NumberInput
        defaultValue={minutes}
        updateValue={(m) => updateDuration(m, seconds)}
      />
      :
      <NumberInput
        defaultValue={seconds}
        updateValue={(s) => updateDuration(minutes, s)}
        maxLength={2}
      />
      {`${minutes}m${seconds}s`}
    </FlowPage>
  );
};

export default Team;
