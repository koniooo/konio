import colors from "./ButtonColor.module.scss";
import { accelerateDecodingTime } from "./Main";
import { trumpCardTime } from "./TrumpCardButton";

const insolenceTime = 53;

type Props = {
  persona: "insolence" | "trumpCard" | "detention";
  hasTrait: boolean;
  setHasTrait: React.Dispatch<React.SetStateAction<boolean>>;
  isStartTimerActive: boolean;
  startTime: number;
};

export const PersonaButtonWithTimer = ({
  persona,
  hasTrait,
  setHasTrait,
  isStartTimerActive,
  startTime,
}: Props) => {
  const timeFromGameStart = accelerateDecodingTime - startTime;
  const traitTime =
    persona === "insolence"
      ? insolenceTime
      : persona === "trumpCard"
      ? trumpCardTime
      : 0;
  const isTraitTimerActive =
    persona === "insolence" || persona === "trumpCard"
      ? isStartTimerActive &&
        0 <= timeFromGameStart &&
        timeFromGameStart < traitTime
      : isStartTimerActive && startTime <= 0;
  return (
    <button
      type="button"
      className={
        hasTrait
          ? colors.red
          : isTraitTimerActive
          ? colors.yellow
          : colors.green
      }
      onClick={() => {
        setHasTrait(!hasTrait);
      }}
    >
      {persona === "insolence" && isTraitTimerActive && (
        <p>{traitTime - timeFromGameStart}</p>
      )}

      {persona === "insolence" && <p>傲慢</p>}
      {persona === "trumpCard" && (
        <p>
          裏向き
          <br />
          カード
        </p>
      )}
      {persona === "detention" && <p>引き留める</p>}
    </button>
  );
};
