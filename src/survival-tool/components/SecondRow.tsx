import styles from "./Main.module.scss";
import { useState } from "react";
import { RowContainer } from "./RowContainer";
import { OneThirdColumn } from "./OneThirdColumn";

import { Persona } from "./Persona";
import { HunterSelect } from "./HunterSelect";
export type Props = {
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
  secondaryTime: number;
};
export const SecondRow = ({
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
}: Props) => {
  return (
    <RowContainer isEdgeRow={false}>
      <OneThirdColumn>
        <HunterSelect hunterId={hunterId} setHunterId={setHunterId} />
        <Persona
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
        <button>{primaryTime}</button>
      </OneThirdColumn>
      <OneThirdColumn>
        <button>{secondaryTime}</button>
      </OneThirdColumn>
    </RowContainer>
  );
};
