const formatSpeakerName = (i) => `#${i}`;

const speakerColorsArray = [
  "var(--color-grass_green)",
  "var(--color-stuck-red)",
  "var(--color-dark-blue)",
  "var(--warning-color)",
  "var(--color-purple)",
  "var(--color-dark-orange)",
  "var(--color-indigo)",
  "var(--color-done-green)",
  "var(--color-lipstick)",
  "var(--color-teal)",
  "var(--color-lilac)",
  "var(--color-bright-green)",
];

const speakerColors = {};

speakerColorsArray.forEach((color, i) => {
  speakerColors[formatSpeakerName(i + 1)] = color;
});

export { formatSpeakerName, speakerColors };
