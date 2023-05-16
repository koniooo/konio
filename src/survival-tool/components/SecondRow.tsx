import styles from "./SecondRow.module.scss";
import { RowContainer } from "./RowContainer";
import { OneThirdColumn } from "./OneThirdColumn";
import { HunterSkillTimer } from "./HunterSkillTimer";
import { Persona } from "./Persona";
import { HunterSelect } from "./HunterSelect";
import { LanguageSwitch } from "src/survival-tool/components/LanguageSwitch";
import { hunterData } from "src/survival-tool/lib/hunterData";

export type Props = {
  isTrumpCardTimerActive: boolean;
  elapsedTime: number;
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
  isTrumpCardTimerActive,
  elapsedTime,
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
          isTrumpCardTimerActive={isTrumpCardTimerActive}
          elapsedTime={elapsedTime}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 200 223.205"
                fill="#292b2f"
              >
                <path
                  d="M174.977,223.209c-4.242,0-8.539-1.081-12.477-3.354l-150-86.602C4.765,128.788,0,120.534,0,111.603
		s4.765-17.185,12.5-21.651l150-86.602c11.958-6.903,27.248-2.806,34.151,9.15c6.903,11.958,2.807,27.247-9.151,34.15L75,111.603
		l112.5,64.952c11.958,6.903,16.054,22.193,9.151,34.15C192.021,218.725,183.616,223.209,174.977,223.209z"
                />
              </svg>
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
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 200.004 223.213"
                fill="#292b2f"
              >
                <path
                  d="M25.028,0c4.242,0,8.539,1.081,12.477,3.354l150,86.602c7.735,4.466,12.5,12.719,12.5,21.651s-4.765,17.185-12.5,21.651
	l-150,86.602c-11.958,6.903-27.248,2.806-34.151-9.15c-6.903-11.958-2.807-27.247,9.151-34.15l112.5-64.952l-112.5-64.952
	C0.547,39.751-3.55,24.462,3.353,12.504C7.984,4.484,16.388,0,25.028,0z"
                />
              </svg>
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
