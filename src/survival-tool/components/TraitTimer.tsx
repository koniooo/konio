import { TimerButton } from "src/survival-tool/components/TimerButton";

type Props = {
  traitTime: number;
  isTraitTimerActive: boolean;
  setIsTraitTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  teleportTime: number;
  isTeleportTimerActive: boolean;
  setIsTeleportTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TraitTimer = () => {
  return (
    <TimerButton
      isTimerActive={isTraitTimerActive}
      setIsTimerActive={setIsTraitTimerActive}
      time={traitTime}
    >
      <p className={styles.traitTimeText}>{traitTime}</p>
      <div className={styles.svgContainer}>
        <div className={styles.halfContainer}>
          <Image src={PatrollerIcon} alt="patroller-icon" fill />
        </div>
        <div className={styles.halfContainer}>
          <Image src={AbnormalIcon} alt="abnormal-icon" fill />
        </div>
      </div>
    </TimerButton>
  );
};
