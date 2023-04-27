import colors from "./ButtonColor.module.scss";

type Args = {
  isTimerActive: boolean;
  time: number;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};
export const TimerButton = ({
  time,
  isTimerActive,
  setIsTimerActive,
  children,
}: Args) => {
  return (
    <button
      className={`${
        !isTimerActive ? colors.green : time > 3 ? colors.yellow : colors.red
      }`}
      onClick={() => {
        setIsTimerActive(!isTimerActive);
      }}
    >
      {children}
    </button>
  );
};
