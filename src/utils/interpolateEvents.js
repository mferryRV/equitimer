import { formatSpeakerName } from "./formatSpeaker";

// Rows show the timer of each participant at a given second
const createFirstRow = (teamSize) => {
  const row = {};
  for (let i = 1; i <= teamSize; i++) {
    // Set their initial timers at 0
    row[formatSpeakerName(i)] = 0;
  }
  return row;
};

const interpolateEvents = (teamSize, events) => {
  // Get a list of speakers in each second
  const speakersBySecond = events.reduce(
    (seconds, { timeElapsed, speaker }, i, eventsArr) => {
      // Check the time of the next event
      const speechDuration = eventsArr[i + 1]
        ? eventsArr[i + 1].timeElapsed - timeElapsed
        : 1;

      for (let i = 0; i < speechDuration; i++) {
        seconds.push(formatSpeakerName(speaker));
      }
      return seconds;
    },
    []
  );

  // Create a row for every second
  const rows = [];

  // Update the timer of the relevant speaker at each second
  speakersBySecond.forEach((speakerKey, i) => {
    if (i === 0) {
      // During second 0, no time is awarded
      rows.push(createFirstRow(teamSize));
    } else if (speakerKey === formatSpeakerName(0)) {
      // No time is added when nobody is talking
      rows.push(rows[rows.length - 1]);
    } else {
      const previousRow = rows[rows.length - 1];
      // Add one to the relevant speaker
      rows.push({ ...previousRow, [speakerKey]: previousRow[speakerKey] + 1 });
    }
  });

  return rows;
};

export default interpolateEvents;
