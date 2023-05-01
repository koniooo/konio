import { RowContainer } from "./RowContainer";
import { StartButton } from "./StartButton";
export type Props = {
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
};

export const FirstRow = ({
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
  setIsPrimaryTimerActive,
  isPrimaryTimerActive,
  setIsSecondaryTimerActive,
  setIsTertiaryTimerActive,
  hunterId,
}: Props) => {
  return (
    <RowContainer isEdgeRow={true}>
        <StartButton
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
          primaryTimerId={primaryTimerId}
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
          isPrimaryTimerActive={isPrimaryTimerActive}
          setIsSecondaryTimerActive={setIsSecondaryTimerActive}
          setIsTertiaryTimerActive={setIsTertiaryTimerActive}
          hunterId={hunterId}
        />
    </RowContainer>
  );
};
