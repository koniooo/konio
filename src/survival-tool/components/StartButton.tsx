import { Props } from "./FirstRow";
import { useRef, useEffect } from "react";
import colors from "./ButtonColor.module.scss";
import {
  readyTime,
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
const detentionTime = 120;

export const StartButton = ({
  isPatrollerTimerActive,
  isTeleportTimerActive,
  isBlinkTimerActive,
  isUltraLongTimerActive,
  startTime,
  setStartTime,
  isStartTimerActive,
  setIsStartTimerActive,
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
  const startTimerId = useRef<number>(0);

  const isFirstStatus = startTime === defaultStartTime && !isStartTimerActive;
  const isSecondStatus =
    0 < startTime && startTime <= defaultStartTime && isStartTimerActive;
  const isThirdStatus = startTime === 0 && !isStartTimerActive;
  const isFourthStatus =
    -120 < startTime && startTime <= 0 && isStartTimerActive;
  const isFifthStatus = startTime === -detentionTime && !isStartTimerActive;

  const timeFromGameStart = accelerateDecodingTime - startTime;

  useEffect(() => {
    if (startTime !== 0 && startTime !== -120) return;
    else {
      clearInterval(startTimerId.current);
      setIsStartTimerActive(false);
    }
  }, [startTime]);

  const triggerTimer = (
    isTimerActive: boolean,
    timerId: number,
    defaultTime: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (isTimerActive) {
      clearInterval(timerId);
      setTime(defaultTime + readyTime);
      timerId = Number(
        setInterval(() => {
          setTime((t) => t - 1);
        }, 1000)
      );
    } else {
      setTime(defaultTime + readyTime);
      setIsTimerActive(true);
    }
  };

  let content;
  if (isFirstStatus) {
    content = "START";
  } else if (isSecondStatus) {
    if (timeFromGameStart < 0) {
      content = `推理開始まで${-timeFromGameStart}秒`;
    } else if (0 <= timeFromGameStart && timeFromGameStart < constrainTime) {
      content = `【封鎖】解除まで
      ${constrainTime - timeFromGameStart}秒`;
    } else if (
      constrainTime <= timeFromGameStart &&
      timeFromGameStart < quenchingEffectStartTime
    ) {
      content = `【焼き入れ効果・フライホイール効果】まで${
        quenchingEffectStartTime - timeFromGameStart
      }秒`;
    } else if (
      quenchingEffectStartTime <= timeFromGameStart &&
      timeFromGameStart < quenchingEffectEndTime
    ) {
      content = `【焼き入れ効果】終了まで${
        quenchingEffectEndTime - timeFromGameStart
      }`;
    } else if (
      quenchingEffectEndTime <= timeFromGameStart &&
      timeFromGameStart < accelerateDecodingTime
    ) {
      content = `【解読加速】まで${
        accelerateDecodingTime - timeFromGameStart
      }秒`;
    }
  } else if (isThirdStatus) {
    content = "【引き留める】";
  } else if (isFourthStatus) {
    content = `【引き留める】終了まで${detentionTime + startTime}秒`;
  } else if (isFifthStatus) {
    content = `@konio_tracy`;
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

          startTimerId.current = Number(
            setInterval(() => {
              setStartTime((t) => t - 1);
            }, 1000)
          );
          setIsStartTimerActive(true);

          triggerTimer(
            isPatrollerTimerActive,
            patrollerTimerId,
            patrollerDefaultTime,
            setPatrollerTime,
            setIsPatrollerTimerActive
          );

          triggerTimer(
            isTeleportTimerActive,
            teleportTimerId,
            teleportDefaultTime,
            setTeleportTime,
            setIsTeleportTimerActive
          );

          triggerTimer(
            isBlinkTimerActive,
            blinkTimerId,
            blinkDefaultTime,
            setBlinkTime,
            setIsBlinkTimerActive
          );

          triggerTimer(
            isUltraLongTimerActive,
            ultraLongTimerId,
            ultraLongDefaultTime,
            setUltraLongTime,
            setIsUltraLongTimerActive
          );
        } else if (isSecondStatus) {
          setStartTime(0); // useEffectにstartTimeが0になったときの処理は任せる
        } else if (isThirdStatus) {
          startTimerId.current = Number(
            setInterval(() => {
              setStartTime((t) => t - 1);
            }, 1000)
          );
          setIsStartTimerActive(true);
        } else if (isFourthStatus) {
          setStartTime(-120); // 上に同じ
        } else if (isFifthStatus) {
          setStartTime(defaultStartTime);
        }
      }}
      className={isStartTimerActive ? colors.yellow : colors.green}
    >
      {content}
    </button>
  );
};
