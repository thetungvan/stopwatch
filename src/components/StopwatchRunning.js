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
      <h4 style={{ color: "#2e9599" }}>Running...</h4>
      <Duration durationMs={durationMs} />
      <div>
        <button style={{ marginRight: 8 }} onClick={stop}>
          Stop
        </button>
        <button onClick={() => split(durationMs)}>Lap</button>
      </div>
    </div>
  );
};

export default StopwatchRunning;
