import { RowContainer } from "./RowContainer";
import { TimerButton } from "./TimerButton";
import styles from "./FourthRow.module.scss";
import { TrumpCardButton } from "./TrumpCardButton";

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
  ultraLongTime: number;
  isUltraLongTimerActive: boolean;
  setIsUltraLongTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  startTime: number;
  isStartTimerActive: boolean;
  isTrumpCardUsed: boolean;
  setIsTrumpCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
  isTrumpCardAlertOn: boolean;
  setIsTrumpCardAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
};
export const FourthRow = ({
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
  ultraLongTime,
  isUltraLongTimerActive,
  setIsUltraLongTimerActive,
  setHasTrumpCard,
  startTime,
  isStartTimerActive,
  isTrumpCardUsed,
  setIsTrumpCardUsed,
  isTrumpCardAlertOn,
  setIsTrumpCardAlertOn,
}: Props) => {
  return (
    <RowContainer isEdgeRow={true}>
      <section className={styles.trump}>
        <TrumpCardButton
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
          setHasTrumpCard={setHasTrumpCard}
          startTime={startTime}
          isStartTimerActive={isStartTimerActive}
          isTrumpCardUsed={isTrumpCardUsed}
          setIsTrumpCardUsed={setIsTrumpCardUsed}
          isTrumpCardAlertOn={isTrumpCardAlertOn}
          setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
        />
      </section>
      <section className={styles.ultraLong}>
        <TimerButton
          isTimerActive={isUltraLongTimerActive}
          setIsTimerActive={setIsUltraLongTimerActive}
          time={ultraLongTime}
        >
          <p>{ultraLongTime}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80.56 80.75"
            fill="#292b2f"
          >
            <path d="M39.79 80.6c-5.46.49-10.8-.16-15.69-2.64a66.28 66.28 0 0 1-8.97-5.76C8.18 67.11 3.98 60.18 1.82 51.91.67 47.52-.35 43.07.12 38.53c.87-8.6 3.21-16.68 8.98-23.49 4.3-5.08 9.55-8.75 15.54-11.57C32.34-.15 40.37-.8 48.54.87c3.28.66 6.44 2.18 9.51 3.62a37.25 37.25 0 0 1 14.8 12.26c4.54 6.35 7.27 13.34 7.65 21.23.33 6.95-.73 13.6-3.5 19.95-.6 1.34-1.76 2.41-2.42 3.73-2.52 5.08-6.5 8.75-11.05 11.95-6.83 4.8-14.18 7.83-22.74 6.99-.33-.04-.67 0-1 0zm3.2-17.7c.47 7.18.29 6.65 5.12 11.24.48.45 1.65.62 2.3.37a75.93 75.93 0 0 0 7.86-3.42c1.75-.9 3.3-2.18 4.93-3.32.2-.15.29-.48.43-.72l-.74-.27c-1.31-.45-2.63-.86-3.92-1.35-.34-.14-.6-.5-.89-.76.38-.03.77-.09 1.15-.1 1.27-.07 2.68.2 3.77-.28 1.39-.6 1.86-3.1 1.27-4.69-.8-2.19-1.72-2.84-3.9-2.67-2.16.16-4.32.32-6.46.58-1.82.22-3.13-.3-4.03-1.97-.65-1.2-1.7-2.2-2.25-3.43-.81-1.82-2.14-1.44-3.5-1.13-.96.2-1.42.68-1 1.79a9.16 9.16 0 0 1 .2 6.8c-.39 1-.24 2.2-.34 3.32zM29.5 74.35c3.34.07 8.07-3.6 8.39-6.46.24-2.12.1-4.31-.07-6.46-.06-.76-.6-1.56-1.12-2.18-.88-1.07-1.48-2-.46-3.36.64-.85 1.06-1.89 1.44-2.9.18-.48.24-1.25-.03-1.6-.82-1.12-3.56-.69-4.32.48a65.2 65.2 0 0 1-3.73 5.28c-.41.52-1.4.97-2.02.86-2.4-.43-4.76-1.15-7.15-1.65a2.55 2.55 0 0 0-1.82.31c-2.48 1.78-2.78 3.2-1.2 6.4.32.62 1.34 1.07 2.11 1.23.73.15 1.55-.23 2.34-.26.35-.02.7.25 1.06.4-.25.24-.45.59-.75.72-1.66.77-3.32 1.58-5.24.84-.25-.1-.61.05-.92.08.17.25.3.54.52.75 2.78 2.76 6.1 4.7 9.68 6.2 1.22.52 2.46.99 3.3 1.32zM56.64 23.2c2.67.15 2.65.04 3.38-2.25.76-2.38 1.87-4.58 4.78-4.99.22-.03.43-.2.65-.3-.16-.2-.3-.47-.5-.61-3.05-2.1-5.94-4.52-9.2-6.22-6.02-3.16-6.48-2.86-10.84 1.88-3.47 3.78-3.12 8.2-1.77 12.67.37 1.22.73 2.2-.15 3.35-.6.79-.44 1.5.71 1.68.87.14 1.74.26 2.57.51 1.01.32 1.55 0 2.27-.8 2.26-2.52 4.02-6.04 8.1-4.92zm-19.26-5.03c-.26-2.05-.9-5.3-1.93-6.96-3.1-5.02-4.77-5.14-8.86-3.18-3.93 1.87-7.72 3.87-10.8 7.01-.17.17-.31.36-.47.54.22.11.43.25.66.32 2.06.58 3.34 1.73 3.65 4.02.32 2.31 1.26 2.97 3.61 3.13.75.05 1.5.13 2.24.2 1.94.2 3.49.9 4.74 2.58 1.3 1.73 2.58 4 5.48 2.84.4-.16.97-.38 1.05-.68.08-.33-.21-.94-.53-1.15-1.2-.78-1.12-1.76-.71-2.93.67-1.9 1.25-3.83 1.87-5.74zm19.63 8.33c-1.97-.64-3.03.79-4.13 2.4-.99 1.43-.36 2.17.75 3.06a112.1 112.1 0 0 1 6.58 5.67c1.68 1.6 1.56 1.59 2.95-.13 3.1-3.84 4.66-4.4 8.97-2.52.57.25 1.06.69 1.64.88.4.14.9 0 1.34-.02-.02-.34-.02-.68-.08-1.01-.09-.45-.2-.89-.35-1.32-1.1-3.38-1.99-6.86-3.41-10.1-.8-1.84-2.3-3.53-3.87-4.83-.73-.6-2.58-.56-3.5-.05-.79.45-1.3 1.94-1.38 3.01-.3 3.71-1.51 4.96-5.51 4.96zM28.13 30c-.17-.41-.25-.69-.38-.94-1.05-1.96-2.7-2.57-4.88-2.42-3.35.22-4.81-1.18-5.14-4.52-.1-.95-.16-1.92-.41-2.83-.46-1.64-3.09-2.35-4.13-1.07a32.22 32.22 0 0 0-3.48 4.95C7.86 26.58 5.81 29.95 5.57 34c-.04.88-.3 1.74-.47 2.61.89-.42 1.8-.8 2.67-1.26 2.98-1.56 5.88-2.15 8.53.63.54.56.93 1.29 1.53 1.77.33.26 1.16.42 1.42.2 2.75-2.26 5.45-4.6 8.14-6.93.32-.28.51-.7.74-1.02zm28.95 23.25c1.89.16 3.96.29 6.02.54.57.08 1.27.38 1.6.8 1.68 2.15 3.6 4.24 3.06 7.33-.05.25.08.53.13.8.25-.19.57-.33.75-.57.57-.77 1.22-1.51 1.6-2.37 1.53-3.5 2.98-7.04 4.43-10.57.1-.25 0-.78-.18-.9-.24-.14-.7-.1-.99.04-2.57 1.17-5.17 1.03-7.79.24-.38-.1-.82-.33-1.02-.64-.9-1.38-1.86-2.76-2.54-4.26-.39-.86-.57-.86-1.28-.41-3.2 2.05-6.46 4.03-9.67 6.07-.25.16-.52.61-.47.86.38 1.96 1.78 3.04 3.8 3.04h2.55zm-44.62 7.48-.23-.05c.24-.7.32-1.53.76-2.06a86.42 86.42 0 0 1 4.84-5.35c.4-.4 1.2-.65 1.76-.59 2.44.26 4.86.68 7.29 1 .94.13 3.28-2.53 2.96-3.41-.12-.35-.6-.63-.97-.83-1.1-.58-2.3-1-3.33-1.68-1.95-1.3-3.83-2.7-5.7-4.11-.83-.63-1.24-.7-1.61.47-.94 2.98-2.8 5.03-6.17 4.97-1.67-.04-3.35-.44-5.02-.67-.35-.05-.7-.08-1.06-.12-.02.36-.11.73-.04 1.07.97 4.24 3.1 7.95 5.32 11.62.31.52.8.93 1.2 1.39v-1.65zm23.63-28.75c-.38.05-.55.05-.71.09-4.98 1.15-9.08 3.8-12.52 7.5-.62.67-.58 1.35.21 2.02a28.5 28.5 0 0 0 12.9 6.16c.34.07.74-.18 1.11-.27-.21-.34-.35-.86-.65-.98-3.28-1.22-3.44-4.24-4.18-6.98-.5-1.86.16-3.3 1.42-4.48.74-.7 1.72-1.15 2.58-1.72.38-.26.74-.56 1.1-.84l-1.26-.5zm7.84 16.2c.58-.12 1.06-.13 1.47-.31 3.67-1.7 7.37-3.35 10.97-5.2 1.9-.98 1.9-1.94.43-3.58-.22-.25-.39-.54-.6-.8-2.7-3.14-6.37-4.66-10.1-6.05-.35-.13-.8.05-1.2.09.18.33.34.68.57.99.32.43.7.82 1.04 1.23 3.35 4.09 2.53 8.96-1.95 11.7-.35.22-.67.5-.95.8-.2.23-.31.55-.47.82l.8.3zm1.07-8.2c.02-1.75-2.04-4.92-3.62-5.5a1.3 1.3 0 0 0-.96.06c-1.23.67-2.57 1.24-3.62 2.14-2.25 1.92-1.33 6.88 1.4 8.05 3.62 1.55 6.75-.63 6.8-4.75zM6.87 41.2c.05 3.25 1.1 4.15 4.77 4.1 1.48 0 4.18-2.75 4.22-4.26.02-1.06-3.13-4.1-4.26-4.1-2.4 0-4.76 2.12-4.73 4.26zm66.67.04c.14-2.22-1.73-4.13-4.2-4.28-1.5-.1-4.3 2.42-4.38 3.96-.1 1.56 2.33 4.24 3.93 4.36 3.7.27 4.43-.37 4.66-4.04z" />
          </svg>
        </TimerButton>
      </section>
    </RowContainer>
  );
};
