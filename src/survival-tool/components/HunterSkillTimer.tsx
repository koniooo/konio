import { hunterData } from "src/survival-tool/lib/hunterData";
import { OneThirdColumn } from "./OneThirdColumn";
import { HunterSkillTimerButton } from "./HunterSkillTimerButton";
import { DreamWitchSkillTimerButton } from "./DreamWitchSkillTimerButton";
import styles from "./HunterSkillTimer.module.scss";

const dreamWitchHunterId = 10;

type Props = {
  hunterId: number;
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

export const HunterSkillTimer = ({
  hunterId,
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
  const selectedHunter = hunterData[hunterId];
  if (hunterId === dreamWitchHunterId) {
    return (
      <>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            time={primaryTime}
            setTime={setPrimaryTime}
            isTimerActive={isPrimaryTimerActive}
            setIsTimerActive={setIsPrimaryTimerActive}
          >
            {selectedHunter.primaryNameJa} {primaryTime}
          </DreamWitchSkillTimerButton>
        </OneThirdColumn>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            time={secondaryTime}
            setTime={setSecondaryTime}
            isTimerActive={isSecondaryTimerActive}
            setIsTimerActive={setIsSecondaryTimerActive}
          >
            {selectedHunter.secondaryNameJa} {secondaryTime}
          </DreamWitchSkillTimerButton>
        </OneThirdColumn>
      </>
    );
  } else if (selectedHunter.tertiaryCoolTime) {
    return (
      <>
        <section className={styles.tripleSkillTimer}>
          <HunterSkillTimerButton
            skill="primary"
            hunterId={hunterId}
            time={primaryTime}
            setTime={setPrimaryTime}
            isTimerActive={isPrimaryTimerActive}
            setIsTimerActive={setIsPrimaryTimerActive}
            timerId={primaryTimerId}
          />
        </section>
        <section className={styles.tripleSkillTimer}>
          <HunterSkillTimerButton
            skill="secondary"
            hunterId={hunterId}
            time={secondaryTime}
            setTime={setSecondaryTime}
            isTimerActive={isSecondaryTimerActive}
            setIsTimerActive={setIsSecondaryTimerActive}
            timerId={secondaryTimerId}
          />
        </section>
        <section className={styles.tripleSkillTimer}>
          <HunterSkillTimerButton
            skill="tertiary"
            hunterId={hunterId}
            time={tertiaryTime}
            setTime={setTertiaryTime}
            isTimerActive={isTertiaryTimerActive}
            setIsTimerActive={setIsTertiaryTimerActive}
            timerId={tertiaryTimerId}
          />
        </section>
      </>
    );
  } else if (selectedHunter.secondaryCoolTime) {
    return (
      <>
        <OneThirdColumn>
          <HunterSkillTimerButton
            skill="primary"
            hunterId={hunterId}
            time={primaryTime}
            setTime={setPrimaryTime}
            isTimerActive={isPrimaryTimerActive}
            setIsTimerActive={setIsPrimaryTimerActive}
            timerId={primaryTimerId}
          />
        </OneThirdColumn>
        <OneThirdColumn>
          <HunterSkillTimerButton
            skill="secondary"
            hunterId={hunterId}
            time={secondaryTime}
            setTime={setSecondaryTime}
            isTimerActive={isSecondaryTimerActive}
            setIsTimerActive={setIsSecondaryTimerActive}
            timerId={secondaryTimerId}
          />
        </OneThirdColumn>
      </>
    );
  } else {
    return (
      <HunterSkillTimerButton
        skill="primary"
        hunterId={hunterId}
        time={primaryTime}
        setTime={setPrimaryTime}
        isTimerActive={isPrimaryTimerActive}
        setIsTimerActive={setIsPrimaryTimerActive}
        timerId={primaryTimerId}
      />
    );
  }
};
