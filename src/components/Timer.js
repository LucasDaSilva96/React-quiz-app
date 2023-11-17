import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  let minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining - minutes * 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
