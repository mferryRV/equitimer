export const parseMinSec = (durationSec) => {
  const minutes = Math.floor(durationSec / 60);
  const seconds = Math.floor(durationSec % 60);

  return [minutes, seconds];
};

export const leftPadNum = (number, digits = 2) => {
  const numDigits = number.toString().length;
  const diff = digits - numDigits;
  return (diff > 0 ? "0".repeat(diff) : "") + number.toString();
};
