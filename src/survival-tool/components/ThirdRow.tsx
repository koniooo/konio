import { RowContainer } from "./RowContainer";
import { TimerButton } from "./TimerButton";
import { OneThirdColumn } from "./OneThirdColumn";

type Props = {
  patrollerTime: number;
  isPatrollerTimerActive: boolean;
  setIsPatrollerTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  teleportTime: number;
  isTeleportTimerActive: boolean;
  setIsTeleportTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  blinkTime: number;
  isBlinkTimerActive: boolean;
  setIsBlinkTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThirdRow = ({
  patrollerTime,
  isPatrollerTimerActive,
  setIsPatrollerTimerActive,
  teleportTime,
  isTeleportTimerActive,
  setIsTeleportTimerActive,
  blinkTime,
  isBlinkTimerActive,
  setIsBlinkTimerActive,
}: Props) => {
  return (
    <RowContainer isEdgeRow={false}>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isPatrollerTimerActive}
          setIsTimerActive={setIsPatrollerTimerActive}
          time={patrollerTime}
        >
          {patrollerTime}
        </TimerButton>
      </OneThirdColumn>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isTeleportTimerActive}
          setIsTimerActive={setIsTeleportTimerActive}
          time={teleportTime}
        >
          {teleportTime}
        </TimerButton>
      </OneThirdColumn>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isBlinkTimerActive}
          setIsTimerActive={setIsBlinkTimerActive}
          time={blinkTime}
        >
          {blinkTime}
        </TimerButton>
      </OneThirdColumn>
    </RowContainer>
  );
};
