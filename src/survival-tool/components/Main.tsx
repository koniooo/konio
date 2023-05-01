import { useState, useEffect, useRef } from "react";
import styles from "survival-tool/components/Main.module.scss";
import { FirstRow } from "./FirstRow";
import { SecondRow } from "./SecondRow";
import { ThirdRow } from "./ThirdRow";
import { FourthRow } from "./FourthRow";
import { hunterData } from "survival-tool/lib/hunterData";

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
  const [patrollerTime, setPatrollerTime] = useState(patrollerCoolTime);
  const [teleportTime, setTeleportTime] = useState(teleportCoolTime);
  const [blinkTime, setBlinkTime] = useState(blinkCoolTime);
  const [ultraLongTime, setUltraLongTime] = useState(ultraLongCoolTime);
  const [isStartTimerActive, setIsStartTimerActive] = useState(false);
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
  const [primaryTime, setPrimaryTime] = useState(0);
  const [secondaryTime, setSecondaryTime] = useState(0);
  const [tertiaryTime, setTertiaryTime] = useState(0);
  const [isPrimaryTimerActive, setIsPrimaryTimerActive] = useState(false);
  const [isSecondaryTimerActive, setIsSecondaryTimerActive] = useState(false);
  const [isTertiaryTimerActive, setIsTertiaryTimerActive] = useState(false);

  const patrollerTimerId = useRef(0);
  const teleportTimerId = useRef(0);
  const blinkTimerId = useRef(0);
  const ultraLongTimerId = useRef(0);
  const primaryTimerId = useRef(0);
  const secondaryTimerId = useRef(0);
  const tertiaryTimerId = useRef(0);

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
        const id = setInterval(() => {
          setTime((t) => t - 1);
        }, 1000);
        timerId.current = Number(id);
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

  const selectedHunter = hunterData[hunterId];
  const selectedPrimaryCoolTime = selectedHunter.primaryCoolTime;
  const selectedSecondaryCoolTime = selectedHunter.secondaryCoolTime;
  const selectedTertiaryCoolTime = selectedHunter.tertiaryCoolTime;
  const sum = (array: number[]) => {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };
  const primaryTotalCoolTime = sum(selectedPrimaryCoolTime);
  const secondaryTotalCoolTime = selectedSecondaryCoolTime
    ? sum(selectedSecondaryCoolTime)
    : 0;

  const tertiaryTotalCoolTime = selectedTertiaryCoolTime
    ? sum(selectedTertiaryCoolTime)
    : 0;

  useTimer(
    primaryTotalCoolTime,
    primaryTime,
    setPrimaryTime,
    isPrimaryTimerActive,
    setIsPrimaryTimerActive,
    primaryTimerId
  );

  useTimer(
    secondaryTotalCoolTime,
    secondaryTime,
    setSecondaryTime,
    isSecondaryTimerActive,
    setIsSecondaryTimerActive,
    secondaryTimerId
  );

  useTimer(
    tertiaryTotalCoolTime,
    tertiaryTime,
    setTertiaryTime,
    isTertiaryTimerActive,
    setIsTertiaryTimerActive,
    tertiaryTimerId
  );

  useEffect(() => {
    setIsPrimaryTimerActive(false);
    setIsSecondaryTimerActive(false);
    setIsTertiaryTimerActive(false);

    setPrimaryTime(primaryTotalCoolTime);
    setSecondaryTime(secondaryTotalCoolTime);
    setTertiaryTime(tertiaryTotalCoolTime);
  }, [hunterId]);

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
        patrollerTimerId={patrollerTimerId}
        teleportTimerId={teleportTimerId}
        blinkTimerId={blinkTimerId}
        ultraLongTimerId={ultraLongTimerId}
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
        setPrimaryTime={setPrimaryTime}
        setIsPrimaryTimerActive={setIsPrimaryTimerActive}
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
        tertiaryTime={tertiaryTime}
        setPrimaryTime={setPrimaryTime}
        setSecondaryTime={setSecondaryTime}
        setTertiaryTime={setTertiaryTime}
        isPrimaryTimerActive={isPrimaryTimerActive}
        isSecondaryTimerActive={isSecondaryTimerActive}
        isTertiaryTimerActive={isTertiaryTimerActive}
        setIsSecondaryTimerActive={setIsSecondaryTimerActive}
        setIsPrimaryTimerActive={setIsPrimaryTimerActive}
        setIsTertiaryTimerActive={setIsTertiaryTimerActive}
        primaryTimerId={primaryTimerId}
        secondaryTimerId={secondaryTimerId}
        tertiaryTimerId={tertiaryTimerId}
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
