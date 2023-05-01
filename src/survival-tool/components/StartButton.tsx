import { Props } from "./FirstRow";
import { useRef, useEffect, ReactNode } from "react";
import colors from "./ButtonColor.module.scss";
import { readyTime, accelerateDecodingTime, defaultHunterId } from "./Main";

const patrollerDefaultTime = 30;
const teleportDefaultTime = 45;
const blinkDefaultTime = 60;
const ultraLongDefaultTime = 30;
const bloodyQueenDefaultTime = 8;

const constrainTime = 40;
const quenchingEffectStartTime = 50;
const quenchingEffectEndTime = 55;
const claustrophobiaTime = 20; // 幽閉の恐怖
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
  primaryTimerId,
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
  setPrimaryTime,
  isPrimaryTimerActive,
  setIsPrimaryTimerActive,
  setIsSecondaryTimerActive,
  setIsTertiaryTimerActive,
  hunterId,
}: Props) => {
  const startTimerId = useRef<number>(0);

  const triggerTimer = (
    isTimerActive: boolean,
    timerId: React.MutableRefObject<number>,
    defaultTime: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (isTimerActive) {
      clearInterval(timerId.current);
      setTime(defaultTime);
      const id = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
      timerId.current = Number(id);
    } else {
      setTime(defaultTime);
      setIsTimerActive(true);
    }
  };

  useEffect(() => {
    if (
      startTime !== accelerateDecodingTime &&
      startTime !== 0 &&
      startTime !== -detentionTime
    )
      return;
    else if (startTime === accelerateDecodingTime) {
      if (hunterId === defaultHunterId) {
        // 画面が回転してる間にハンターを特定している可能性があるため
        triggerTimer(
          isPrimaryTimerActive,
          primaryTimerId,
          bloodyQueenDefaultTime,
          setPrimaryTime,
          setIsPrimaryTimerActive
        );
      }

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
    } else {
      clearInterval(startTimerId.current);
      setIsStartTimerActive(false);
    }
  }, [startTime]);

  const isFirstStatus =
    startTime === readyTime + accelerateDecodingTime && !isStartTimerActive;
  const isSecondStatus =
    0 < startTime &&
    startTime <= readyTime + accelerateDecodingTime &&
    isStartTimerActive;
  const isThirdStatus = startTime === 0 && !isStartTimerActive;
  const isFourthStatus =
    -120 < startTime && startTime <= 0 && isStartTimerActive;
  const isFifthStatus = startTime === -detentionTime && !isStartTimerActive;

  const timeFromGameStart = accelerateDecodingTime - startTime;

  let content;
  if (isFirstStatus) {
    content = (
      <>
        <p>START</p>
        <br />
        <p>画面が割れて視点が回り始める瞬間にタップ</p>
      </>
    );
  } else if (isSecondStatus) {
    if (timeFromGameStart < 0) {
      content = <p>推理開始まで {-timeFromGameStart} 秒</p>;
    } else if (0 <= timeFromGameStart && timeFromGameStart < constrainTime) {
      content = (
        <>
          <p>【封鎖】解除まで {constrainTime - timeFromGameStart} 秒</p>
          <br />
          <p>
            【焼き入れ効果・フライホイール効果】まで{` `}
            {quenchingEffectStartTime - timeFromGameStart} 秒
          </p>
        </>
      );
    } else if (
      constrainTime <= timeFromGameStart &&
      timeFromGameStart < quenchingEffectStartTime
    ) {
      content = (
        <p>
          【焼き入れ効果・フライホイール効果】まで{` `}
          {quenchingEffectStartTime - timeFromGameStart} 秒
        </p>
      );
    } else if (
      quenchingEffectStartTime <= timeFromGameStart &&
      timeFromGameStart < quenchingEffectEndTime
    ) {
      content = (
        <p>
          【焼き入れ効果】終了まで {quenchingEffectEndTime - timeFromGameStart}{" "}
          秒
        </p>
      );
    } else {
      content = (
        <p>【解読加速】まで {accelerateDecodingTime - timeFromGameStart} 秒</p>
      );
    }
  } else if (isThirdStatus) {
    content = <p>【通電】</p>;
  } else if (isFourthStatus) {
    if (startTime > -20) {
      content = (
        <p>【幽閉の恐怖】解除まで {claustrophobiaTime + startTime}秒</p>
      );
    } else {
      content = <p>【引き留める】終了まで {detentionTime + startTime}秒</p>;
    }
  } else if (isFifthStatus) {
    content = `@konio_tracy`;
  }

  return (
    <button
      onClick={() => {
        if (isFirstStatus) {
          setIsPatrollerTimerActive(false);
          setIsTeleportTimerActive(false);
          setIsBlinkTimerActive(false);
          setIsUltraLongTimerActive(false);
          setIsPrimaryTimerActive(false);
          setIsSecondaryTimerActive(false);
          setIsTertiaryTimerActive(false);

          setHasConfinedSpace(false);
          setHasWantedOrder(false);
          setHasInsolence(false);
          setHasTrumpCard(false);
          setHasDetention(false);

          setHunterId(defaultHunterId);

          const id = setInterval(() => {
            setStartTime((t) => t - 1);
          }, 1000);
          startTimerId.current = Number(id);
          setIsStartTimerActive(true);
        } else if (isSecondStatus) {
          setStartTime(0); // useEffectにstartTimeが0になったときの処理は任せる
        } else if (isThirdStatus) {
          const id = setInterval(() => {
            setStartTime((t) => t - 1);
          }, 1000);
          startTimerId.current = Number(id);
          setIsStartTimerActive(true);
        } else if (isFourthStatus) {
          setStartTime(-120); // 上に同じ
        } else if (isFifthStatus) {
          setStartTime(readyTime + accelerateDecodingTime);
        }
      }}
      className={isStartTimerActive ? colors.yellow : colors.green}
    >
      {content}
    </button>
  );
};
