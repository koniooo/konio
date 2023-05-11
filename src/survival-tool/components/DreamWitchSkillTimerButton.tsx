import { type } from "os";
import colors from "./ButtonColor.module.scss";

type Props = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const DreamWitchSkillTimerButton = ({
  time,
  setTime,
  isTimerActive,
  setIsTimerActive,
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={
        !isTimerActive ? colors.green : time > 3 ? colors.yellow : colors.red
      }
      onClick={() => {
        if (isTimerActive) {
          const nextTime = Math.round(time * ((100 - 40) / 100));
          setTime(nextTime);
        } else {
          setIsTimerActive(true);
        }
      }}
    >
      {children}
    </button>
  );
};
