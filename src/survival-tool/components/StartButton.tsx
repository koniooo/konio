import { useRef, useEffect } from "react";
import colors from "./Color.module.scss";
import { readyTime, accelerateDecodingTime, bloodyQueenId } from "./Main";
import styles from "./StartButton.module.scss";

const patrollerDefaultTime = 30;
const teleportDefaultTime = 45;
const blinkDefaultTime = 60;
const ultraLongDefaultTime = 30;
const bloodyQueenDefaultTime = 8;

const constrainTime = 40;
const quenchingEffectStartTime = 50;
const quenchingEffectDuration = 5;
const claustrophobiaTime = 20; // 幽閉の恐怖
const detentionTime = 120;

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
      elapsedTime !== accelerateDecodingTime + detentionTime
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
    elapsedTime < accelerateDecodingTime + detentionTime &&
    isStartTimerActive;
  const isFifthStatus =
    elapsedTime === accelerateDecodingTime + detentionTime &&
    !isStartTimerActive;

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
        <p className={styles.readyTime}>
          ゲーム開始まで <span>{-elapsedTime}</span>
        </p>
      );
    } else if (0 <= elapsedTime && elapsedTime < constrainTime) {
      content = (
        <>
          <p className={styles.constrain}>
            【封鎖】解除まで <span>{constrainTime - elapsedTime}</span>
          </p>
          <p className={styles.quenchingEffect}>
            【焼き入れ効果・フライホイール効果】まで{` `}
            <span>{quenchingEffectStartTime - elapsedTime}</span>
          </p>
        </>
      );
    } else if (
      constrainTime <= elapsedTime &&
      elapsedTime < quenchingEffectStartTime
    ) {
      content = (
        <p>
          【焼き入れ効果・フライホイール効果】まで{` `}
          <span>{quenchingEffectStartTime - elapsedTime}</span>
        </p>
      );
    } else if (
      quenchingEffectStartTime <= elapsedTime &&
      elapsedTime < quenchingEffectStartTime + quenchingEffectDuration
    ) {
      content = (
        <p>
          【焼き入れ効果】終了まで{" "}
          <span>
            {quenchingEffectStartTime + quenchingEffectDuration - elapsedTime}
          </span>
        </p>
      );
    } else {
      content = (
        <p>
          【解読加速】まで <span>{accelerateDecodingTime - elapsedTime}</span>
        </p>
      );
    }
  } else if (isThirdStatus) {
    content = <p>【通電】</p>;
  } else if (isFourthStatus) {
    if (elapsedTime < accelerateDecodingTime + claustrophobiaTime) {
      content = (
        <p>
          【幽閉の恐怖】解除まで{" "}
          <span>
            {accelerateDecodingTime + claustrophobiaTime - elapsedTime}
          </span>
        </p>
      );
    } else {
      content = (
        <p>
          【引き留める】終了まで{" "}
          <span>{accelerateDecodingTime + detentionTime - elapsedTime}</span>
        </p>
      );
    }
  } else if (isFifthStatus) {
    content = (
      <div className={styles.credit}>
        <p>Developed by Konio</p>
        <a
          href="https://twitter.com/konio_tracy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 203.09887"
            fill="#292b2f"
          >
            <path
              d="M78.6,203.1c94.3,0,145.9-78.2,145.9-145.9,0-2.2,0-4.4-.1-6.6A107.41429,107.41429,0,0,0,250,24.1a104.26084,104.26084,0,0,1-29.5,8.1A51.248,51.248,0,0,0,243,3.8a100.89757,100.89757,0,0,1-32.6,12.4A51.33635,51.33635,0,0,0,123,63,145.84067,145.84067,0,0,1,17.4,9.4,51.20116,51.20116,0,0,0,33.3,77.8,50.268,50.268,0,0,1,10,71.4V72a51.36843,51.36843,0,0,0,41.2,50.3,50.571,50.571,0,0,1-23.2.9,51.307,51.307,0,0,0,47.9,35.6,102.985,102.985,0,0,1-63.7,22c-4.1,0-8.2-.3-12.2-.7a145.094,145.094,0,0,0,78.6,23"
              transform="translate(0 -0.00114)"
            />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${isStartTimerActive ? colors.yellow : colors.green} ${
        isFifthStatus && styles.twitterColor
      } ${styles.startButton}`}
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
          setElapsedTime(accelerateDecodingTime); // useEffectにelapsedTimeがaccelerateDecodingTimeになったときの処理は任せる
        } else if (isThirdStatus) {
          const id = setInterval(() => {
            setElapsedTime((t) => t + 1);
          }, 1000);
          startTimerId.current = Number(id);
          setIsStartTimerActive(true);
        } else if (isFourthStatus) {
          setElapsedTime(accelerateDecodingTime + detentionTime); // 上に同じ
        } else if (isFifthStatus) {
          setElapsedTime(-readyTime);
        }
      }}
    >
      {content}
    </button>
  );
};
