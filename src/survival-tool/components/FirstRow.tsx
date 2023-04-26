import { RowContainer } from "./RowContainer";
import { TimerButton } from "./TimerButton";
import { StartButton } from "./StartButton";
export type Props = {
  setPatrollerTimerId: React.Dispatch<
    React.SetStateAction<number | NodeJS.Timer>
  >;

  setTeleportTimerId: React.Dispatch<
    React.SetStateAction<number | NodeJS.Timer>
  >;
  setBlinkTimerId: React.Dispatch<React.SetStateAction<number | NodeJS.Timer>>;
  setUltraLongTimerId: React.Dispatch<
    React.SetStateAction<number | NodeJS.Timer>
  >;
  startTime: number;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  isStartTimerActive: boolean;
  setIsStartTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  startTimerId: number | NodeJS.Timer;
  patrollerTimerId: number | NodeJS.Timer;
  teleportTimerId: number | NodeJS.Timer;
  blinkTimerId: number | NodeJS.Timer;
  ultraLongTimerId: number | NodeJS.Timer;
  setStartTimerId: React.Dispatch<React.SetStateAction<number | NodeJS.Timer>>;
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
};

export const FirstRow = ({
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
  return (
    <RowContainer isEdgeRow={true}>
      <StartButton
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
    </RowContainer>
  );
};
