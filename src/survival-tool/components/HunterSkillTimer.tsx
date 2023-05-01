import { hunterData } from "survival-tool/lib/hunterData";
import { OneThirdColumn } from "./OneThirdColumn";
import { TwoThirdColumn } from "./TwoThirdColumn";
import { TimerButton } from "./TimerButton";
import { DualStatusTimerButton } from "./DualStatusTimerButton";
import { HunterSkillTimerButton } from "./HunterSkillTimerButton";

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

  if (selectedHunter.tertiaryCoolTime) {
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
          <button></button>
        </OneThirdColumn>
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
      <TwoThirdColumn>
        <HunterSkillTimerButton
          skill="primary"
          hunterId={hunterId}
          time={primaryTime}
          setTime={setPrimaryTime}
          isTimerActive={isPrimaryTimerActive}
          setIsTimerActive={setIsPrimaryTimerActive}
          timerId={primaryTimerId}
        />
      </TwoThirdColumn>
    );
  }
};
