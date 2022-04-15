import { useState } from "react";

import StopwatchInitial from "./components/StopwatchInitial";
import StopwatchRunning from "./components/StopwatchRunning";
import StopwatchStop from "./components/StopwatchStop";
import Duration from "./components/Duration";

const STATUS = {
  INITIAL: "initial",
  STOP: "stop",
  RUNNING: "running",
};

const App = () => {
  const [status, setStatus] = useState(STATUS.INITIAL);
  const [startTimeMs, setStartTime] = useState(0);
  const [splits, updateSplits] = useState([]);

  const start = () => {
    setStatus(STATUS.RUNNING);
    setStartTime(Date.now());
  };

  const stop = () => setStatus(STATUS.STOP);
  const resume = (durationMs) => {
    setStatus(STATUS.RUNNING);
    setStartTime(Date.now() - durationMs);
  };
  const reset = () => {
    setStatus(STATUS.INITIAL);
    updateSplits([]);
  };

  const splitTime = (durationMs) =>
    updateSplits([...splits, durationMs].slice(-10));

  return (
    <div style={{ width: "fit-content", margin: "0 auto" }}>
      {status === STATUS.INITIAL && <StopwatchInitial start={start} />}
      {status === STATUS.RUNNING && (
        <StopwatchRunning
          startTimeMs={startTimeMs}
          stop={stop}
          split={splitTime}
        />
      )}
      {status === STATUS.STOP && (
        <StopwatchStop
          startTimeMs={startTimeMs}
          resume={resume}
          reset={reset}
        />
      )}
      <h4>Laps</h4>
      {splits.map((split) => (
        <Duration key={split} durationMs={split} />
      ))}
    </div>
  );
};

export default App;
