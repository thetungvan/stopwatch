import { useState } from "react";

import StopwatchInitial from "./components/StopwatchInitial";
import StopwatchRunning from "./components/StopwatchRunning";
import StopwatchStop from "./components/StopwatchStop";
import { convertTime } from "./components/utils";

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

  const splitTime = (durationMs) => updateSplits([...splits, durationMs]);

  return (
    <div>
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
      {splits.map((split) => (
        <p key={split}>{convertTime(split)}</p>
      ))}
    </div>
  );
};

export default App;
