import Duration from "./Duration";

const StopwatchInitial = ({ start }) => (
  <div>
    <h4 style={{ color: "#a7226f" }}>Initial</h4>
    <Duration durationMs={0} />
    <div>
      <button onClick={start}>Start</button>
    </div>
  </div>
);

export default StopwatchInitial;
