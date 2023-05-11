import { TimerButton } from "./TimerButton";
import { DualStatusTimerButton } from "./DualStatusTimerButton";
import { hunterData } from "src/survival-tool/lib/hunterData";

type Props = {
  skill: "primary" | "secondary" | "tertiary";
  hunterId: number;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  timerId: React.MutableRefObject<number>;
};

export const HunterSkillTimerButton = ({
  skill,
  isTimerActive,
  time,
  setIsTimerActive,
  hunterId,
  setTime,
  timerId,
}: Props) => {
  const selectedHunter = hunterData[hunterId];
  const selectedPrimaryCoolTime = selectedHunter.primaryCoolTime;
  const selectedSecondaryCoolTime = selectedHunter.secondaryCoolTime || [0, 0]; // undefinedとなる可能性があるためundefinedの場合は[0, 0]というデフォルト値を設定する（or演算子は左辺がfalsyな場合に右辺を返す）
  const selectedTertiaryCoolTime = selectedHunter.tertiaryCoolTime || [0, 0];

  const haveSingleStatus =
    skill === "primary"
      ? selectedPrimaryCoolTime.length === 1
      : skill === "secondary"
      ? selectedSecondaryCoolTime.length === 1
      : selectedTertiaryCoolTime.length === 1;

  if (haveSingleStatus) {
    return (
      <TimerButton
        time={time}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      >
        {time}
        {skill === "primary" && selectedHunter.primaryNameJa}
        {skill === "secondary" && selectedHunter.secondaryNameJa}
        {skill === "tertiary" && selectedHunter.tertiaryNameJa}
      </TimerButton>
    );
  } else {
    return (
      <DualStatusTimerButton
        secondCoolTime={
          skill === "primary"
            ? selectedPrimaryCoolTime[1]
            : skill === "secondary"
            ? selectedSecondaryCoolTime[1]
            : selectedTertiaryCoolTime[1]
        }
        time={time}
        setTime={setTime}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        timerId={timerId}
      >
        {skill === "primary" &&
          `${
            time > selectedPrimaryCoolTime[1]
              ? time - selectedPrimaryCoolTime[1]
              : time
          } ${selectedHunter.primaryNameJa}`}

        {skill === "secondary" &&
          `${
            time > selectedSecondaryCoolTime[1]
              ? time - selectedSecondaryCoolTime[1]
              : time
          } ${selectedHunter.secondaryNameJa}`}
        {skill === "tertiary" &&
          `${
            time > selectedTertiaryCoolTime[1]
              ? time - selectedTertiaryCoolTime[1]
              : time
          } ${selectedHunter.tertiaryNameJa}`}
      </DualStatusTimerButton>
    );
  }
};
