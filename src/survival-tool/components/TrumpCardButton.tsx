import { patrollerCoolTime, teleportCoolTime, blinkCoolTime } from "./Main";
import colors from "./ButtonColor.module.scss";
import { accelerateDecodingTime } from "./Main";

export const trumpCardTime = 120;

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
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  startTime: number;
  isStartTimerActive: boolean;
};

export const TrumpCardButton = ({
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
  setHasTrumpCard,
  startTime,
  isStartTimerActive,
}: Props) => {
  const timeFromGameStart = accelerateDecodingTime - startTime;
  const isTrumpCardTimerActive =
    isStartTimerActive &&
    0 <= timeFromGameStart &&
    timeFromGameStart < trumpCardTime;
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
    <button
      className={isTrumpCardTimerActive ? colors.yellow : colors.green}
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
            setIsBlinkTimerActive(false);
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
      {isTrumpCardTimerActive && trumpCardTime - timeFromGameStart}
      裏向きカード
    </button>
  );
};
