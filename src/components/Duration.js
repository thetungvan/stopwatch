import { convertTime } from "./utils";

const Duration = ({ durationMs }) => {
  return (
    <div>
      <code>{convertTime(durationMs)}</code>
    </div>
  );
};

export default Duration;
