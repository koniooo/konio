import colors from "./ButtonColor.module.scss";

type Props = {
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
}: Props) => {
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
