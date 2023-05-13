// import { Props } from "./FirstRow";
import { useRef, useEffect } from "react";
import colors from "./Color.module.scss";
import { readyTime, accelerateDecodingTime, bloodyQueenId } from "./Main";
import Image from "next/image";
import TwitterIcon from "public/survival-tool/startButton/twitter.svg";
import styles from "./StartButton.module.scss";

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
type Props = {
  startTime: number;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
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
      startTime !== accelerateDecodingTime &&
      startTime !== 0 &&
      startTime !== -detentionTime
    )
      return;
    else if (startTime === accelerateDecodingTime) {
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
        <p>※画面が割れて視点が回り始める瞬間にタップ</p>
      </>
    );
  } else if (isSecondStatus) {
    if (timeFromGameStart < 0) {
      content = <p>推理開始まで {-timeFromGameStart}</p>;
    } else if (0 <= timeFromGameStart && timeFromGameStart < constrainTime) {
      content = (
        <>
          <p>【封鎖】解除まで {constrainTime - timeFromGameStart}</p>
          <br />
          <p>
            【焼き入れ効果・フライホイール効果】まで{` `}
            {quenchingEffectStartTime - timeFromGameStart}
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
          {quenchingEffectStartTime - timeFromGameStart}
        </p>
      );
    } else if (
      quenchingEffectStartTime <= timeFromGameStart &&
      timeFromGameStart < quenchingEffectEndTime
    ) {
      content = (
        <p>
          【焼き入れ効果】終了まで {quenchingEffectEndTime - timeFromGameStart}
        </p>
      );
    } else {
      content = (
        <p>【解読加速】まで {accelerateDecodingTime - timeFromGameStart}</p>
      );
    }
  } else if (isThirdStatus) {
    content = <p>【通電】</p>;
  } else if (isFourthStatus) {
    if (startTime > -20) {
      content = <p>【幽閉の恐怖】解除まで {claustrophobiaTime + startTime}</p>;
    } else {
      content = <p>【引き留める】終了まで {detentionTime + startTime}</p>;
    }
  } else if (isFifthStatus) {
    content = (
      <>
        <p>developed by Konio</p>
        <a
          href="https://twitter.com/konio_tracy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.svgContainer}>
            <Image src={TwitterIcon} alt="twitter-icon" fill />
          </div>
        </a>
      </>
    );
  }

  return (
    <button
      type="button"
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
