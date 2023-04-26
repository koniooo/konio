import { start } from "repl";
import { Props } from "./FirstRow";
import styles from "./StartButton.module.scss";
import {
  gameStartTime,
  accelerateDecodingTime,
  defaultStartTime,
  defaultHunterId,
} from "./Main";

const patrollerDefaultTime = 30;
const teleportDefaultTime = 45;
const blinkDefaultTime = 60;
const ultraLongDefaultTime = 30;

const constrainTime = 40;
const quenchingEffectStartTime = 50;
const quenchingEffectEndTime = 55;
const trumpCardTime = 120;
const detentionTime = 120;

export const StartButton = ({
  isPatrollerTimerActive,
  isTeleportTimerActive,
  isBlinkTimerActive,
  isUltraLongTimerActive,
  setPatrollerTimerId,
  setTeleportTimerId,
  setBlinkTimerId,
  setUltraLongTimerId,
  startTime,
  setStartTime,
  isStartTimerActive,
  setIsStartTimerActive,
  startTimerId,
  setStartTimerId,
  patrollerTimerId,
  teleportTimerId,
  blinkTimerId,
  ultraLongTimerId,
  setPatrollerTime,
  setTeleportTime,
  setBlinkTime,
  setUltraLongTime,
  setIsPatrollerTimerActive,
  setIsTeleportTimerActive,
  setIsBlinkTimerActive,
  setIsUltraLongTimerActive,
  setHasConfinedSpace,
  setHasWantedOrder,
  setHasInsolence,
  setHasDetention,
  setHasTrumpCard,
  setHunterId,
}: Props) => {
  const isFirstStatus = startTime === defaultStartTime && !isStartTimerActive;
  const isSecondStatus =
    0 < startTime && startTime <= defaultStartTime && isStartTimerActive;
  const isThirdStatus = startTime === 0 && !isStartTimerActive;
  const isFourthStatus =
    -120 < startTime && startTime <= 0 && isStartTimerActive;
  const isFifthStatus = startTime === -detentionTime && !isStartTimerActive;

  const triggerTimer = (
    isTimerActive: boolean,
    timerId: number | NodeJS.Timer,
    defaultTime: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setTimerId: React.Dispatch<React.SetStateAction<number | NodeJS.Timer>>,
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (isTimerActive) {
      clearInterval(timerId);
      setTime(defaultTime);
      const id = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
      setTimerId(id);
    } else {
      setTime(defaultTime);
      setIsTimerActive(true);
    }
  };

  let content;
  if (isFirstStatus) {
    content = "START";
  } else if (isSecondStatus) {
    if (startTime) {
    }
  }
  return (
    <button
      onClick={() => {
        if (isFirstStatus) {
          setHunterId(defaultHunterId);
          setHasConfinedSpace(false);
          setHasWantedOrder(false);
          setHasInsolence(false);
          setHasTrumpCard(false);
          setHasDetention(false);

          const id = setInterval(() => {
            setStartTime((t) => t - 1);
          }, 1000);
          setStartTimerId(id);
          setIsStartTimerActive(true);

          triggerTimer(
            isPatrollerTimerActive,
            patrollerTimerId,
            patrollerDefaultTime,
            setPatrollerTime,
            setPatrollerTimerId,
            setIsPatrollerTimerActive
          );

          triggerTimer(
            isTeleportTimerActive,
            teleportTimerId,
            teleportDefaultTime,
            setTeleportTime,
            setTeleportTimerId,
            setIsTeleportTimerActive
          );

          triggerTimer(
            isBlinkTimerActive,
            blinkTimerId,
            blinkDefaultTime,
            setBlinkTime,
            setBlinkTimerId,
            setIsBlinkTimerActive
          );

          triggerTimer(
            isUltraLongTimerActive,
            ultraLongTimerId,
            ultraLongDefaultTime,
            setUltraLongTime,
            setUltraLongTimerId,
            setIsUltraLongTimerActive
          );
        } else if (isSecondStatus) {
          clearInterval(startTimerId);
          setStartTime(0);
          setIsStartTimerActive(false);
        } else if (isThirdStatus) {
          const id = setInterval(() => {
            setStartTime((t) => t - 1);
          }, 1000);
          setStartTimerId(id);
          setIsStartTimerActive(true);
        } else if (isFourthStatus) {
          clearInterval(startTimerId);
          setStartTime(-120);
          setIsStartTimerActive(false);
        } else if (isFifthStatus) {
          setStartTime(defaultStartTime);
        }
      }}
      className={`${styles.startButton} ${
        isStartTimerActive ? styles.yellow : styles.green
      }`}
    >
      {`${startTime} ${content}`}
    </button>
  );
};
