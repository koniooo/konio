import colors from "./ButtonColor.module.scss";
import { RowContainer } from "./RowContainer";
import { OneThirdColumn } from "./OneThirdColumn";

import { Persona } from "./Persona";
import { HunterSelect } from "./HunterSelect";
export type Props = {
  startTime: number;
  isStartTimerActive: boolean;
  hunterId: number;
  setHunterId: React.Dispatch<React.SetStateAction<number>>;
  hasConfinedSpace: boolean;
  setHasConfinedSpace: React.Dispatch<React.SetStateAction<boolean>>;
  hasWantedOrder: boolean;
  setHasWantedOrder: React.Dispatch<React.SetStateAction<boolean>>;
  hasInsolence: boolean;
  setHasInsolence: React.Dispatch<React.SetStateAction<boolean>>;
  hasDetention: boolean;
  setHasDetention: React.Dispatch<React.SetStateAction<boolean>>;
  hasTrumpCard: boolean;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  primaryTime: number;
  setPrimaryTime: React.Dispatch<React.SetStateAction<number>>;
  secondaryTime: number;
  isPrimaryTimerActive: boolean;
  setIsPrimaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SecondRow = ({
  startTime,
  isStartTimerActive,
  hasConfinedSpace,
  setHasConfinedSpace,
  hasWantedOrder,
  setHasWantedOrder,
  hasInsolence,
  setHasInsolence,
  hasTrumpCard,
  setHasTrumpCard,
  hasDetention,
  setHasDetention,
  hunterId,
  setHunterId,
  primaryTime,
  secondaryTime,
  isPrimaryTimerActive,
  setIsPrimaryTimerActive,
}: Props) => {
  return (
    <RowContainer isEdgeRow={false}>
      <OneThirdColumn>
        <HunterSelect hunterId={hunterId} setHunterId={setHunterId} />
        <Persona
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
        />
      </OneThirdColumn>
      <OneThirdColumn>
        <button
          className={`${
            !isPrimaryTimerActive
              ? colors.green
              : primaryTime > 3
              ? colors.yellow
              : colors.red
          }`}
          onClick={() => {
            setIsPrimaryTimerActive(!isPrimaryTimerActive);
          }}
        >
          {primaryTime}
        </button>
      </OneThirdColumn>
      <OneThirdColumn>
        <button>{secondaryTime}</button>
      </OneThirdColumn>
    </RowContainer>
  );
};
