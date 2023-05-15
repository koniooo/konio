import { RowContainer } from "./RowContainer";
import { TimerButton } from "./TimerButton";
import styles from "./FourthRow.module.scss";
import { TrumpCardButton } from "./TrumpCardButton";
import { UltraLongTimer } from "src/survival-tool/components/UltraLongTimer";

type Props = {
  patrollerTime: number;
  setPatrollerTime: React.Dispatch<React.SetStateAction<number>>;
  isPatrollerTimerActive: boolean;
  setIsPatrollerTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  teleportTime: number;
  setTeleportTime: React.Dispatch<React.SetStateAction<number>>;
  isTeleportTimerActive: boolean;
  setIsTeleportTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  blinkTime: number;
  setBlinkTime: React.Dispatch<React.SetStateAction<number>>;
  isBlinkTimerActive: boolean;
  setIsBlinkTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  ultraLongTime: number;
  isUltraLongTimerActive: boolean;
  setIsUltraLongTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  elapsedTime: number;
  isStartTimerActive: boolean;
  isTrumpCardUsed: boolean;
  setIsTrumpCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
  isTrumpCardAlertOn: boolean;
  setIsTrumpCardAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
};
export const FourthRow = ({
  patrollerTime,
  setPatrollerTime,
  isPatrollerTimerActive,
  setIsPatrollerTimerActive,
  teleportTime,
  setTeleportTime,
  isTeleportTimerActive,
  setIsTeleportTimerActive,
  blinkTime,
  setBlinkTime,
  isBlinkTimerActive,
  setIsBlinkTimerActive,
  ultraLongTime,
  isUltraLongTimerActive,
  setIsUltraLongTimerActive,
  setHasTrumpCard,
  elapsedTime,
  isStartTimerActive,
  isTrumpCardUsed,
  setIsTrumpCardUsed,
  isTrumpCardAlertOn,
  setIsTrumpCardAlertOn,
}: Props) => {
  return (
    <RowContainer isEdgeRow={true}>
      <section className={styles.trump}>
        <TrumpCardButton
          patrollerTime={patrollerTime}
          setPatrollerTime={setPatrollerTime}
          isPatrollerTimerActive={isPatrollerTimerActive}
          setIsPatrollerTimerActive={setIsPatrollerTimerActive}
          teleportTime={teleportTime}
          setTeleportTime={setTeleportTime}
          isTeleportTimerActive={isTeleportTimerActive}
          setIsTeleportTimerActive={setIsTeleportTimerActive}
          blinkTime={blinkTime}
          setBlinkTime={setBlinkTime}
          isBlinkTimerActive={isBlinkTimerActive}
          setIsBlinkTimerActive={setIsBlinkTimerActive}
          setHasTrumpCard={setHasTrumpCard}
          elapsedTime={elapsedTime}
          isStartTimerActive={isStartTimerActive}
          isTrumpCardUsed={isTrumpCardUsed}
          setIsTrumpCardUsed={setIsTrumpCardUsed}
          isTrumpCardAlertOn={isTrumpCardAlertOn}
          setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
        />
      </section>
      <section className={styles.ultraLong}>
        <UltraLongTimer
          isUltraLongTimerActive={isUltraLongTimerActive}
          setIsUltraLongTimerActive={setIsUltraLongTimerActive}
          ultraLongTime={ultraLongTime}
        />
      </section>
    </RowContainer>
  );
};
