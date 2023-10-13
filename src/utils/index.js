import { leftPadNum, parseMinSec } from "./formatClock";
import { formatSpeakerName, speakerColors } from "./formatSpeaker";
import interpolateEvents from "./interpolateEvents";
import { getResponsiveSvgDims } from "./d3Charts";

const sum = (arr) => arr.reduce((total, val) => total + val, 0);

export {
  sum,
  leftPadNum,
  parseMinSec,
  formatSpeakerName,
  speakerColors,
  interpolateEvents,
  getResponsiveSvgDims,
};
