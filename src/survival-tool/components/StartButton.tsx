import { useRef, useEffect } from "react";
import { readyTime, bloodyQueenId } from "./Main";
import colors from "./Color.module.scss";
import styles from "./StartButton.module.scss";

const patrollerDefaultTime = 30;
const teleportDefaultTime = 45;
const blinkDefaultTime = 60;
const ultraLongDefaultTime = 30;
const bloodyQueenDefaultTime = 8;

const constrainTime = 40;
const quenchingEffectStartTime = 50;
const quenchingEffectDuration = 5;
export const accelerateDecodingTime = 202;
const claustrophobiaTime = 20; // 幽閉の恐怖
export const detentionTime = 120;

type Props = {
  elapsedTime: number;
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
  isStartTimerActive: boolean;
  setIsStartTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  patrollerTimerId: React.MutableRefObject<number>;
  teleportTimerId: React.MutableRefObject<number>;
  blinkTimerId: React.MutableRefObject<number>;
  ultraLongTimerId: React.MutableRefObject<number>;
  primaryTimerId: React.MutableRefObject<number>;
  setPatrollerTime: React.Dispatch<React.SetStateAction<number>>;
  setTeleportTime: React.Dispatch<React.SetStateAction<number>>;
  setBlinkTime: React.Dispatch<React.SetStateAction<number>>;
  setUltraLongTime: React.Dispatch<React.SetStateAction<number>>;
  setIsPatrollerTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTeleportTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBlinkTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUltraLongTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setHasConfinedSpace: React.Dispatch<React.SetStateAction<boolean>>;
  setHasWantedOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setHasInsolence: React.Dispatch<React.SetStateAction<boolean>>;
  setHasDetention: React.Dispatch<React.SetStateAction<boolean>>;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  setHunterId: React.Dispatch<React.SetStateAction<number>>;
  isPatrollerTimerActive: boolean;
  isTeleportTimerActive: boolean;
  isBlinkTimerActive: boolean;
  isUltraLongTimerActive: boolean;
  setPrimaryTime: React.Dispatch<React.SetStateAction<number>>;
  setIsPrimaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  isPrimaryTimerActive: boolean;
  setIsSecondaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTertiaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  hunterId: number;
  setIsTrumpCardAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTrumpCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
};
export const StartButton = ({
  isPatrollerTimerActive,
  isTeleportTimerActive,
  isBlinkTimerActive,
  isUltraLongTimerActive,
  elapsedTime,
  setElapsedTime,
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
  setIsTrumpCardAlertOn,
  setIsTrumpCardUsed,
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
      elapsedTime !== 0 &&
      elapsedTime !== accelerateDecodingTime &&
      elapsedTime !== accelerateDecodingTime + detentionTime + 10 &&
      elapsedTime !== -readyTime
    ) {
      return;
    } else if (elapsedTime === 0) {
      if (hunterId === bloodyQueenId) {
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
    } else if (elapsedTime === accelerateDecodingTime + detentionTime + 10) {
      clearInterval(startTimerId.current);
      setIsStartTimerActive(false);
      setElapsedTime(-readyTime);
    } else {
      clearInterval(startTimerId.current);
      setIsStartTimerActive(false);
    }
  }, [elapsedTime]);

  const isFirstStatus = elapsedTime === -readyTime && !isStartTimerActive;
  const isSecondStatus =
    -readyTime <= elapsedTime &&
    elapsedTime < accelerateDecodingTime &&
    isStartTimerActive;
  const isThirdStatus =
    elapsedTime === accelerateDecodingTime && !isStartTimerActive;
  const isFourthStatus =
    accelerateDecodingTime <= elapsedTime &&
    elapsedTime < accelerateDecodingTime + detentionTime + 10 &&
    isStartTimerActive;

  let content;
  if (isFirstStatus) {
    content = (
      <>
        <p className={styles.start}>START</p>
        <p className={styles.description}>
          ※画面が割れて視点が回り始める瞬間にタップ
        </p>
      </>
    );
  } else if (isSecondStatus) {
    if (elapsedTime < 0) {
      content = (
        <p>
          ゲーム開始まで <span>{-elapsedTime}</span>
        </p>
      );
    } else if (elapsedTime < constrainTime) {
      content = (
        <>
          <p className={styles.firstLine}>
            【封鎖】発動中 <span>{constrainTime - elapsedTime}</span>
          </p>
          <p className={styles.secondLine}>
            【焼き入れ効果・フライホイール効果】まで{` `}
            <span>{quenchingEffectStartTime - elapsedTime}</span>
          </p>
        </>
      );
    } else if (elapsedTime < quenchingEffectStartTime) {
      content = (
        <>
          <p className={styles.firstLine}>【封鎖】解除済み</p>
          <p className={styles.secondLine}>
            【焼き入れ効果・フライホイール効果】まで{` `}
            <span>{quenchingEffectStartTime - elapsedTime}</span>
          </p>
        </>
      );
    } else if (
      elapsedTime <
      quenchingEffectStartTime + quenchingEffectDuration
    ) {
      content = (
        <p>
          【焼き入れ効果】発動中{" "}
          <span>
            {quenchingEffectStartTime + quenchingEffectDuration - elapsedTime}
          </span>
        </p>
      );
    } else if (
      elapsedTime <
      quenchingEffectStartTime + quenchingEffectDuration + 10
    ) {
      content = (
        <>
          <p className={styles.firstLine}>【焼き入れ効果】発動済み</p>
          <p className={styles.secondLine}>
            【解読加速】まで <span>{accelerateDecodingTime - elapsedTime}</span>
          </p>
        </>
      );
    } else {
      content = (
        <p>
          【解読加速】まで <span>{accelerateDecodingTime - elapsedTime}</span>
        </p>
      );
    }
  } else if (isThirdStatus) {
    content = <p className={styles.gateOpen}>通電</p>;
  } else if (isFourthStatus) {
    if (elapsedTime < accelerateDecodingTime + claustrophobiaTime) {
      content = (
        <>
          <p className={styles.firstLine}>
            【幽閉の恐怖】発動中{" "}
            <span>
              {accelerateDecodingTime + claustrophobiaTime - elapsedTime}
            </span>
          </p>
          <p className={styles.secondLine}>
            【引き留める】発動中{" "}
            <span>{accelerateDecodingTime + detentionTime - elapsedTime}</span>
          </p>
        </>
      );
    } else if (elapsedTime < accelerateDecodingTime + claustrophobiaTime + 10) {
      content = (
        <>
          <p className={styles.firstLine}>【幽閉の恐怖】解除済み</p>
          <p className={styles.secondLine}>
            【引き留める】発動中{" "}
            <span>{accelerateDecodingTime + detentionTime - elapsedTime}</span>
          </p>
        </>
      );
    } else if (elapsedTime < accelerateDecodingTime + detentionTime) {
      content = (
        <p>
          【引き留める】発動中{" "}
          <span>{accelerateDecodingTime + detentionTime - elapsedTime}</span>
        </p>
      );
    } else {
      content = <p>【引き留める】解除済み</p>;
    }
  }

  return (
    <button
      type="button"
      className={`${isStartTimerActive ? colors.yellow : colors.green}  ${
        styles.startButton
      }`}
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

          setHunterId(bloodyQueenId);

          setIsTrumpCardUsed(false);
          setIsTrumpCardAlertOn(false);

          const id = setInterval(() => {
            setElapsedTime((t) => t + 1);
          }, 1000);
          startTimerId.current = Number(id);
          setIsStartTimerActive(true);
        } else if (isSecondStatus) {
          if (elapsedTime < 0) {
            clearInterval(startTimerId.current);
            setElapsedTime(0);
            const id = setInterval(() => {
              setElapsedTime((t) => t + 1);
            }, 1000);
            startTimerId.current = Number(id);
          } else {
            setElapsedTime(accelerateDecodingTime); // elapsedTimeがaccelerateDecodingTimeになったときの処理はuseEffectに任せる
          }
        } else if (isThirdStatus) {
          const id = setInterval(() => {
            setElapsedTime((t) => t + 1);
          }, 1000);
          startTimerId.current = Number(id);
          setIsStartTimerActive(true);
        } else if (isFourthStatus) {
          setElapsedTime(-readyTime); // 上に同じ
        }
      }}
    >
      {content}
    </button>
  );
};
