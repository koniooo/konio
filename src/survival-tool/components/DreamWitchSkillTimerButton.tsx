import colors from "./Color.module.scss";
import styles from "./DreamWitchSkillTimerButton.module.scss";
import common from "./HunterSkillTimerButton.module.scss";
import { hunterData } from "survival-tool/lib/hunterData";
import { dreamWitchId } from "survival-tool/components/HunterSkillTimer";
type Props = {
  skill: "primary" | "secondary";
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DreamWitchSkillTimerButton = ({
  time,
  setTime,
  isTimerActive,
  setIsTimerActive,
  skill,
}: Props) => {
  const selectedHunter = hunterData[dreamWitchId];
  return (
    <button
      type="button"
      className={
        !isTimerActive
          ? `${colors.green} ${colors.greenText}`
          : time > 3
          ? `${colors.yellow} ${colors.yellowText}`
          : `${colors.red} ${colors.redText}`
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
      <p className={common.timeText}>{time}</p>
      {skill === "primary" && (
        <p className={`${common.skillText} ${styles.skillText}`}>
          <span>{selectedHunter.primaryNameJa}</span>
        </p>
      )}
      {skill === "secondary" && (
        <p className={`${common.skillText} ${styles.skillText}`}>
          <span>{selectedHunter.secondaryNameJa}</span>
        </p>
      )}
      {skill === "primary" && (
        <div className={styles.description}>※オリジナルの攻撃が</div>
      )}
      {skill === "secondary" && (
        <div className={styles.description}>命中するたびにタップ</div>
      )}
    </button>
  );
};
