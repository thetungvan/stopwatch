import { useState, useEffect } from "react";

import Duration from "./Duration";

const useNow = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const repaint = () => {
      setNow(Date.now());
      return requestAnimationFrame(repaint);
    };

    const id = repaint();

    return () => cancelAnimationFrame(id);
  }, []);

  return now;
};

const StopwatchRunning = ({ startTimeMs, stop, split }) => {
  const durationMs = useNow() - startTimeMs;

  return (
    <div>
      <h4>Running</h4>
      <Duration durationMs={durationMs} />
      <div>
        <button onClick={stop}>Stop</button>
        <button onClick={() => split(durationMs)}>Split</button>
      </div>
    </div>
  );
};

export default StopwatchRunning;
