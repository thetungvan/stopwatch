import Duration from "./Duration";

const StopwatchStop = ({ startTimeMs, resume, reset }) => {
  const durationMs = Date.now() - startTimeMs;

  return (
    <div>
      <h4>Paused</h4>
      <Duration durationMs={durationMs} />
      <div>
        <button onClick={() => resume(durationMs)}>Resume</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchStop;
