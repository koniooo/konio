import styles from "./SecondRow.module.scss";
import { RowContainer } from "./RowContainer";
import { OneThirdColumn } from "./OneThirdColumn";
import { HunterSkillTimer } from "./HunterSkillTimer";
import { Persona } from "./Persona";
import { HunterSelect } from "./HunterSelect";
import { LanguageSwitch } from "src/survival-tool/components/LanguageSwitch";
import { hunterData } from "src/survival-tool/lib/hunterData";

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
          <section
            className={`${styles.minusHunterId} ${
              hunterId === 0 && styles.disabled
            }`}
          >
            <button
              onClick={() => {
                if (hunterId === 0) {
                  return;
                }
                setHunterId((t) => t - 1);
              }}
            >
              &lt;
            </button>
          </section>
          <section className={styles.hunterSelectSec}>
            <HunterSelect hunterId={hunterId} setHunterId={setHunterId} />
          </section>
          <section
            className={`${styles.plusHunterId} ${
              hunterId === hunterData.length - 1 && styles.disabled
            }`}
          >
            <button
              onClick={() => {
                if (hunterId === hunterData.length - 1) {
                  return;
                }
                setHunterId((t) => t + 1);
              }}
            >
              &gt;
            </button>
          </section>
          <section className={styles.languageSwitch}>
            <LanguageSwitch />
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
