const Duration = ({ durationMs }) => {
  const hh = String(Math.floor(durationMs / 1000 / 60 / 60)).padStart(2, "0");
  const mm = String(Math.floor(durationMs / 1000 / 60) % 60).padStart(2, "0");
  const ss = String(Math.floor(durationMs / 1000) % 60).padStart(2, "0");
  const ms = String(durationMs % 1000).padStart(3, "0");

  return (
    <div style={{ fontSize: 24, padding: "8px 0" }}>
      <code>
        <span>{hh}</span>:<span>{mm}</span>
        <span>{ss}</span>.<span style={{ fontSize: 12 }}>{ms}</span>
      </code>
    </div>
  );
};

export default Duration;
