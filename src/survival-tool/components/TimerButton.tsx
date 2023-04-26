import styles from "./TimerButton.module.scss";

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
      className={`${styles.timerButton} ${
        !isTimerActive ? styles.green : time > 3 ? styles.yellow : styles.red
      }`}
      onClick={() => {
        setIsTimerActive(!isTimerActive);
      }}
    >
      {children}
    </button>
  );
};
