export const convertTime = (durationMs) => {
  const hh = String(Math.floor(durationMs / 1000 / 60 / 60)).padStart(2, "0");
  const mm = String(Math.floor(durationMs / 1000 / 60) % 60).padStart(2, "0");
  const ss = String(Math.floor(durationMs / 1000) % 60).padStart(2, "0");
  const ms = String(durationMs % 100).padStart(3, "0");

  return `${hh}:${mm}:${ss}.${ms}`;
};
