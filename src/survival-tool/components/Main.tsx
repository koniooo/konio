import { useState, useEffect, useRef } from "react";
import styles from "survival-tool/components/Main.module.scss";
import { FirstRow } from "./FirstRow";
import { SecondRow } from "./SecondRow";
import { useTimer } from "survival-tool/lib/useTimer";
import { ThirdRow } from "./ThirdRow";
import { FourthRow } from "./FourthRow";

export const patrollerCoolTime = 90;
export const teleportCoolTime = 100;
export const blinkCoolTime = 150;
export const ultraLongCoolTime = 150;

export const gameStartTime = 5;
export const accelerateDecodingTime = 202;
export const defaultStartTime = gameStartTime + accelerateDecodingTime;
export const defaultHunterId = 13; // bloody queen

export const Main = () => {
  const [startTime, setStartTime] = useState(defaultStartTime);
  const [isStartTimerActive, setIsStartTimerActive] = useState<boolean>(false);
  const [startTimerId, setStartTimerId] = useState<number | NodeJS.Timer>(0);
  const [patrollerTime, setPatrollerTime] = useState<number>(patrollerCoolTime);
  const [teleportTime, setTeleportTime] = useState<number>(teleportCoolTime);
  const [blinkTime, setBlinkTime] = useState<number>(blinkCoolTime);
  const [ultraLongTime, setUltraLongTime] = useState<number>(ultraLongCoolTime);
  const [isPatrollerTimerActive, setIsPatrollerTimerActive] =
    useState<boolean>(false);
  const [isTeleportTimerActive, setIsTeleportTimerActive] =
    useState<boolean>(false);
  const [isBlinkTimerActive, setIsBlinkTimerActive] = useState<boolean>(false);
  const [isUltraLongTimerActive, setIsUltraLongTimerActive] =
    useState<boolean>(false);
  const [patrollerTimerId, setPatrollerTimerId] = useState<
    number | NodeJS.Timer
  >(0);
  const [teleportTimerId, setTeleportTimerId] = useState<number | NodeJS.Timer>(
    0
  );
  const [blinkTimerId, setBlinkTimerId] = useState<number | NodeJS.Timer>(0);
  const [ultraLongTimerId, setUltraLongTimerId] = useState<
    number | NodeJS.Timer
  >(0);
  const [hasConfinedSpace, setHasConfinedSpace] = useState(false);

  const [hasWantedOrder, setHasWantedOrder] = useState(false);
  const [hasTrumpCard, setHasTrumpCard] = useState<boolean>(false);
  const [hasInsolence, setHasInsolence] = useState(false);
  const [hasDetention, setHasDetention] = useState(false);

  const [hunterId, setHunterId] = useState(defaultHunterId);
  const [primaryTime, setPrimaryTime] = useState(0);
  const [secondaryTime, setSecondaryTime] = useState(0);

  useTimer(
    patrollerCoolTime,
    patrollerTime,
    setPatrollerTime,
    isPatrollerTimerActive,
    setIsPatrollerTimerActive,
    patrollerTimerId,
    setPatrollerTimerId
  );

  useTimer(
    teleportCoolTime,
    teleportTime,
    setTeleportTime,
    isTeleportTimerActive,
    setIsTeleportTimerActive,
    teleportTimerId,
    setTeleportTimerId
  );

  useTimer(
    blinkCoolTime,
    blinkTime,
    setBlinkTime,
    isBlinkTimerActive,
    setIsBlinkTimerActive,
    blinkTimerId,
    setBlinkTimerId
  );

  useTimer(
    ultraLongCoolTime,
    ultraLongTime,
    setUltraLongTime,
    isUltraLongTimerActive,
    setIsUltraLongTimerActive,
    ultraLongTimerId,
    setUltraLongTimerId
  );

  return (
    <main className={styles.main}>
      <FirstRow
        isPatrollerTimerActive={isPatrollerTimerActive}
        isTeleportTimerActive={isTeleportTimerActive}
        isBlinkTimerActive={isBlinkTimerActive}
        isUltraLongTimerActive={isUltraLongTimerActive}
        setPatrollerTimerId={setPatrollerTimerId}
        setTeleportTimerId={setTeleportTimerId}
        setBlinkTimerId={setBlinkTimerId}
        setUltraLongTimerId={setUltraLongTimerId}
        startTime={startTime}
        setStartTime={setStartTime}
        isStartTimerActive={isStartTimerActive}
        setIsStartTimerActive={setIsStartTimerActive}
        startTimerId={startTimerId}
        patrollerTimerId={patrollerTimerId}
        teleportTimerId={teleportTimerId}
        blinkTimerId={blinkTimerId}
        ultraLongTimerId={ultraLongTimerId}
        setStartTimerId={setStartTimerId}
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
      />
    </main>
  );
};
