import Duration from "./Duration";

const StopwatchStop = ({ startTimeMs, resume, reset }) => {
  const durationMs = Date.now() - startTimeMs;

  return (
    <div>
      <h4 style={{ color: "#f46c3f" }}>Stopped</h4>
      <Duration durationMs={durationMs} />
      <div>
        <button style={{ marginRight: 8 }} onClick={() => resume(durationMs)}>
          Resume
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchStop;
