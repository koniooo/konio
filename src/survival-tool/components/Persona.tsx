import styles from "./Persona.module.scss";
import { PersonaButton } from "./PersonaButton";
import { accelerateDecodingTime } from "./Main";
import { trumpCardTime } from "./TrumpCardButton";

const insolenceTime = [24, 53, 83, 113];

type Props = {
  startTime: number;
  isStartTimerActive: boolean;
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
};

export const Persona = ({
  startTime,
  isStartTimerActive,
  hasConfinedSpace,
  setHasConfinedSpace,
  hasWantedOrder,
  setHasWantedOrder,
  hasInsolence,
  setHasInsolence,
  hasDetention,
  setHasDetention,
  hasTrumpCard,
  setHasTrumpCard,
}: Props) => {
  const timeFromGameStart = accelerateDecodingTime - startTime;

  const isInsolenceTimerActive =
    isStartTimerActive &&
    0 <= timeFromGameStart &&
    timeFromGameStart <= insolenceTime[insolenceTime.length - 1];

  const isTrumpCardTimerActive =
    isStartTimerActive &&
    0 <= timeFromGameStart &&
    timeFromGameStart < trumpCardTime;

  const isDetentionTimerActive = isStartTimerActive && startTime <= 0;

  const insolenceValue: number =
    timeFromGameStart <= insolenceTime[0]
      ? (250 / insolenceTime[0]) * timeFromGameStart
      : timeFromGameStart <= insolenceTime[1]
      ? 250 +
        (250 / (insolenceTime[1] - insolenceTime[0])) *
          (timeFromGameStart - insolenceTime[0])
      : timeFromGameStart <= insolenceTime[2]
      ? 500 +
        (250 / (insolenceTime[2] - insolenceTime[1])) *
          (timeFromGameStart - insolenceTime[1])
      : 750 +
        (250 / (insolenceTime[3] - insolenceTime[2])) *
          (timeFromGameStart - insolenceTime[2]);

  return (
    <section className={`${styles.persona}`}>
      <div className={`${styles.vertical} ${styles.top}`}>
        <div className={styles.confinedSpace}>
          <PersonaButton
            hasPersona={hasConfinedSpace}
            setHasPersona={setHasConfinedSpace}
            isPersonaTimerActive={false}
          >
            <p>閉鎖空間</p>
          </PersonaButton>
        </div>
        <div className={styles.wantedOrder}>
          <PersonaButton
            hasPersona={hasWantedOrder}
            setHasPersona={setHasWantedOrder}
            isPersonaTimerActive={false}
          >
            <p>
              指名
              <br />
              手配
            </p>
          </PersonaButton>
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={`${styles.horizontal} ${styles.left}`}>
          <PersonaButton
            hasPersona={hasInsolence}
            setHasPersona={setHasInsolence}
            isPersonaTimerActive={isInsolenceTimerActive}
          >
            {isInsolenceTimerActive && (
              <>
                <p className={styles.insolenceValueText}>
                  {Math.round(insolenceValue)}
                </p>
                <br />
              </>
            )}
            <p>傲慢</p>
          </PersonaButton>
        </div>
        <div className={`${styles.horizontal} ${styles.right}`}>
          <PersonaButton
            hasPersona={hasTrumpCard}
            setHasPersona={setHasTrumpCard}
            isPersonaTimerActive={isTrumpCardTimerActive}
          >
            <p>
              裏向き
              <br />
              カード
            </p>
          </PersonaButton>
        </div>
      </div>
      <div className={`${styles.vertical} ${styles.bottom}`}>
        <PersonaButton
          hasPersona={hasDetention}
          setHasPersona={setHasDetention}
          isPersonaTimerActive={isDetentionTimerActive}
        >
          <p>引き留める</p>
        </PersonaButton>
      </div>
    </section>
  );
};
