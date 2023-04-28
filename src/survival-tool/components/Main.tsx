import { useState, useEffect, useRef } from "react";
import styles from "survival-tool/components/Main.module.scss";
import { FirstRow } from "./FirstRow";
import { SecondRow } from "./SecondRow";
import { ThirdRow } from "./ThirdRow";
import { FourthRow } from "./FourthRow";

export const patrollerCoolTime = 90;
export const teleportCoolTime = 100;
export const blinkCoolTime = 150;
export const ultraLongCoolTime = 150;

export const readyTime = 5;
export const accelerateDecodingTime = 202;
export const defaultStartTime = readyTime + accelerateDecodingTime;
export const defaultHunterId = 13; // bloody queen

export const Main = () => {
  const [startTime, setStartTime] = useState(defaultStartTime);
  const [isStartTimerActive, setIsStartTimerActive] = useState(false);
  const [patrollerTime, setPatrollerTime] = useState(patrollerCoolTime);
  const [teleportTime, setTeleportTime] = useState(teleportCoolTime);
  const [blinkTime, setBlinkTime] = useState(blinkCoolTime);
  const [ultraLongTime, setUltraLongTime] = useState(ultraLongCoolTime);
  const [isPatrollerTimerActive, setIsPatrollerTimerActive] = useState(false);
  const [isTeleportTimerActive, setIsTeleportTimerActive] = useState(false);
  const [isBlinkTimerActive, setIsBlinkTimerActive] = useState(false);
  const [isUltraLongTimerActive, setIsUltraLongTimerActive] = useState(false);
  const [hasConfinedSpace, setHasConfinedSpace] = useState(false);
  const [hasWantedOrder, setHasWantedOrder] = useState(false);
  const [hasTrumpCard, setHasTrumpCard] = useState(false);
  const [hasInsolence, setHasInsolence] = useState(false);
  const [hasDetention, setHasDetention] = useState(false);
  const [hunterId, setHunterId] = useState(defaultHunterId);
  const [primaryTime, setPrimaryTime] = useState(30);
  const [secondaryTime, setSecondaryTime] = useState(0);
  const [isPrimaryTimerActive, setIsPrimaryTimerActive] = useState(false);

  const patrollerTimerId = useRef<number>(0);
  const teleportTimerId = useRef<number>(0);
  const blinkTimerId = useRef<number>(0);
  const ultraLongTimerId = useRef<number>(0);

  const useTimer = (
    coolTime: number,
    time: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    isTimerActive: boolean,
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>,
    timerId: React.MutableRefObject<number>
  ) => {
    useEffect(() => {
      if (isTimerActive) {
        timerId.current = Number(
          setInterval(() => {
            setTime((t) => t - 1);
          }, 1000)
        );
      } else {
        clearInterval(timerId.current);
        setTime(coolTime);
      }
    }, [isTimerActive]);

    useEffect(() => {
      if (time !== 0) return;
      else {
        clearInterval(timerId.current);
        setIsTimerActive(false);
        setTime(coolTime);
      }
    }, [time]);
  };

  useTimer(
    patrollerCoolTime,
    patrollerTime,
    setPatrollerTime,
    isPatrollerTimerActive,
    setIsPatrollerTimerActive,
    patrollerTimerId
  );

  useTimer(
    teleportCoolTime,
    teleportTime,
    setTeleportTime,
    isTeleportTimerActive,
    setIsTeleportTimerActive,
    teleportTimerId
  );

  useTimer(
    blinkCoolTime,
    blinkTime,
    setBlinkTime,
    isBlinkTimerActive,
    setIsBlinkTimerActive,
    blinkTimerId
  );

  useTimer(
    ultraLongCoolTime,
    ultraLongTime,
    setUltraLongTime,
    isUltraLongTimerActive,
    setIsUltraLongTimerActive,
    ultraLongTimerId
  );


  return (
    <main className={styles.main}>
      <FirstRow
        isPatrollerTimerActive={isPatrollerTimerActive}
        isTeleportTimerActive={isTeleportTimerActive}
        isBlinkTimerActive={isBlinkTimerActive}
        isUltraLongTimerActive={isUltraLongTimerActive}
        startTime={startTime}
        setStartTime={setStartTime}
        isStartTimerActive={isStartTimerActive}
        setIsStartTimerActive={setIsStartTimerActive}
        patrollerTimerId={patrollerTimerId.current}
        teleportTimerId={teleportTimerId.current}
        blinkTimerId={blinkTimerId.current}
        ultraLongTimerId={ultraLongTimerId.current}
        setPatrollerTime={setPatrollerTime}
        setTeleportTime={setTeleportTime}
        setBlinkTime={setBlinkTime}
        setUltraLongTime={setUltraLongTime}
        setIsPatrollerTimerActive={setIsPatrollerTimerActive}
        setIsTeleportTimerActive={setIsTeleportTimerActive}
        setIsBlinkTimerActive={setIsBlinkTimerActive}
        setIsUltraLongTimerActive={setIsUltraLongTimerActive}
        setHasConfinedSpace={setHasConfinedSpace}
        setHasWantedOrder={setHasWantedOrder}
        setHasInsolence={setHasInsolence}
        setHasTrumpCard={setHasTrumpCard}
        setHasDetention={setHasDetention}
        setHunterId={setHunterId}
      />
      <SecondRow
        startTime={startTime}
        isStartTimerActive={isStartTimerActive}
        hasConfinedSpace={hasConfinedSpace}
        setHasConfinedSpace={setHasConfinedSpace}
        hasWantedOrder={hasWantedOrder}
        setHasWantedOrder={setHasWantedOrder}
        hasInsolence={hasInsolence}
        setHasInsolence={setHasInsolence}
        hasTrumpCard={hasTrumpCard}
        setHasTrumpCard={setHasTrumpCard}
        hasDetention={hasDetention}
        setHasDetention={setHasDetention}
        hunterId={hunterId}
        setHunterId={setHunterId}
        primaryTime={primaryTime}
        secondaryTime={secondaryTime}
        isPrimaryTimerActive={isPrimaryTimerActive}
        setIsPrimaryTimerActive={setIsPrimaryTimerActive}
        setPrimaryTime={setPrimaryTime}
      />
      <ThirdRow
        patrollerTime={patrollerTime}
        isPatrollerTimerActive={isPatrollerTimerActive}
        setIsPatrollerTimerActive={setIsPatrollerTimerActive}
        teleportTime={teleportTime}
        isTeleportTimerActive={isTeleportTimerActive}
        setIsTeleportTimerActive={setIsTeleportTimerActive}
        blinkTime={blinkTime}
        isBlinkTimerActive={isBlinkTimerActive}
        setIsBlinkTimerActive={setIsBlinkTimerActive}
      />
      <FourthRow
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
        ultraLongTime={ultraLongTime}
        isUltraLongTimerActive={isUltraLongTimerActive}
        setIsUltraLongTimerActive={setIsUltraLongTimerActive}
        setHasTrumpCard={setHasTrumpCard}
        startTime={startTime}
        isStartTimerActive={isStartTimerActive}
      />
    </main>
  );
};
