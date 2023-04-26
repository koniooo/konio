import { useEffect } from "react";

export const useTimer = (
  coolTime: number,
  time: number,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  isTimerActive: boolean,
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>,
  timerId: number | NodeJS.Timer,
  setTimerId: React.Dispatch<React.SetStateAction<number | NodeJS.Timer>>
) => {
  useEffect(() => {
    if (isTimerActive) {
      const id = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
      setTimerId(id);
    } else {
      clearInterval(timerId);
      setTime(coolTime);
    }
  }, [isTimerActive]);

  useEffect(() => {
    if (time !== 0) return;
    else {
      clearInterval(timerId);
      setTime(coolTime);
      setIsTimerActive(false);
    }
  }, [time]);
};
