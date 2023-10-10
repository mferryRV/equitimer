export const parseMinSec = (durationSec) => {
  const minutes = Math.floor(durationSec / 60);
  const seconds = Math.floor(durationSec % 60);

  return [minutes, seconds];
};

export const leftPadNum = (number, digits = 2) => {
  const numDigits = number.toString().length;

  return "0".repeat(digits - numDigits) + number.toString();
};
