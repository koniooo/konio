import styles from "./SecondRow.module.scss";
import { RowContainer } from "./RowContainer";
import { OneThirdColumn } from "./OneThirdColumn";
import { HunterSkillTimer } from "./HunterSkillTimer";
import { Persona } from "./Persona";
import { HunterSelect } from "./HunterSelect";
import Image from "next/image";
import TranslationIcon from "public/survival-tool/translation.svg";

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
  isPrimaryTimerActive: boolean;
  setIsPrimaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  secondaryTime: number;
  setSecondaryTime: React.Dispatch<React.SetStateAction<number>>;
  isSecondaryTimerActive: boolean;
  setIsSecondaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  tertiaryTime: number;
  setTertiaryTime: React.Dispatch<React.SetStateAction<number>>;
  isTertiaryTimerActive: boolean;
  setIsTertiaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  primaryTimerId: React.MutableRefObject<number>;
  secondaryTimerId: React.MutableRefObject<number>;
  tertiaryTimerId: React.MutableRefObject<number>;
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
  tertiaryTime,
  setPrimaryTime,
  setSecondaryTime,
  setTertiaryTime,
  isPrimaryTimerActive,
  isSecondaryTimerActive,
  isTertiaryTimerActive,
  setIsPrimaryTimerActive,
  setIsSecondaryTimerActive,
  setIsTertiaryTimerActive,
  primaryTimerId,
  secondaryTimerId,
  tertiaryTimerId,
}: Props) => {
  return (
    <RowContainer isEdgeRow={false}>
      <OneThirdColumn>
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
      <div className={styles.secondRowRightDiv}>
        <div className={styles.hunterSelectAndLanguage}>
          <section className={styles.hunterSelectSec}>
            <HunterSelect hunterId={hunterId} setHunterId={setHunterId} />
          </section>
          <section className={styles.languageLink}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <div className={styles.svgContainer}>
                <Image src={TranslationIcon} alt="translation-icon" fill />
              </div>
            </a>
          </section>
        </div>
        <div>
          <section className={styles.hunterSkillTimerSec}>
            <HunterSkillTimer
              hunterId={hunterId}
              primaryTime={primaryTime}
              secondaryTime={secondaryTime}
              tertiaryTime={tertiaryTime}
              setPrimaryTime={setPrimaryTime}
              setSecondaryTime={setSecondaryTime}
              setTertiaryTime={setTertiaryTime}
              isPrimaryTimerActive={isPrimaryTimerActive}
              isSecondaryTimerActive={isSecondaryTimerActive}
              isTertiaryTimerActive={isTertiaryTimerActive}
              setIsSecondaryTimerActive={setIsSecondaryTimerActive}
              setIsPrimaryTimerActive={setIsPrimaryTimerActive}
              setIsTertiaryTimerActive={setIsTertiaryTimerActive}
              primaryTimerId={primaryTimerId}
              secondaryTimerId={secondaryTimerId}
              tertiaryTimerId={tertiaryTimerId}
            />
          </section>
        </div>
      </div>
    </RowContainer>
  );
};
