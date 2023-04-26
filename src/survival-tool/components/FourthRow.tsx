import { RowContainer } from "./RowContainer";
import { TimerButton } from "./TimerButton";
import styles from "./FourthRow.module.scss";
import {
  patrollerCoolTime,
  teleportCoolTime,
  blinkCoolTime,
  ultraLongCoolTime,
} from "./Main";

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
}: Props) => {
  const trumpCardFunc = (
    sourceTraitTime: number,
    sourceTraitCoolTime: number,
    targetTraitCoolTime: number,
    setTargetTraitTime: React.Dispatch<React.SetStateAction<number>>,
    setIsTargetTraitTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const targetTraitTime = Math.round(
      targetTraitCoolTime * (sourceTraitTime / sourceTraitCoolTime)
    );
    setTargetTraitTime(targetTraitTime);
    setIsTargetTraitTimerActive(true);
  };
  return (
    <RowContainer isEdgeRow={true}>
      <section className={styles.trump}>
        <button
          onClick={() => {
            const activeTraitList = [
              isPatrollerTimerActive,
              isTeleportTimerActive,
              isBlinkTimerActive,
            ].filter((isActive) => {
              return isActive;
            });
            const numberOfActiveTrait = activeTraitList.length;

            if (numberOfActiveTrait === 1) {
              setHasTrumpCard(true);
              if (isPatrollerTimerActive) {
                trumpCardFunc(
                  patrollerTime,
                  patrollerCoolTime,
                  teleportCoolTime,
                  setTeleportTime,
                  setIsTeleportTimerActive
                );

                trumpCardFunc(
                  patrollerTime,
                  patrollerCoolTime,
                  blinkCoolTime,
                  setBlinkTime,
                  setIsBlinkTimerActive
                );
              } else if (isTeleportTimerActive) {
                trumpCardFunc(
                  teleportTime,
                  teleportCoolTime,
                  patrollerCoolTime,
                  setPatrollerTime,
                  setIsPatrollerTimerActive
                );

                trumpCardFunc(
                  teleportTime,
                  teleportCoolTime,
                  blinkCoolTime,
                  setBlinkTime,
                  setIsBlinkTimerActive
                );
              } else {
                trumpCardFunc(
                  blinkTime,
                  blinkCoolTime,
                  patrollerCoolTime,
                  setPatrollerTime,
                  setIsPatrollerTimerActive
                );

                trumpCardFunc(
                  blinkTime,
                  blinkCoolTime,
                  teleportCoolTime,
                  setTeleportTime,
                  setIsTeleportTimerActive
                );
              }
            }
          }}
        >
          裏向きカード
        </button>
      </section>
      <section className={styles.priestess}>
        <TimerButton
          isTimerActive={isUltraLongTimerActive}
          setIsTimerActive={setIsUltraLongTimerActive}
          time={ultraLongTime}
        >
          {ultraLongTime}
        </TimerButton>
      </section>
    </RowContainer>
  );
};
