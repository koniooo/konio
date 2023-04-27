import styles from "./Persona.module.scss";
import colors from "./ButtonColor.module.scss";
import { PersonaButton } from "./PersonaButton";
import { accelerateDecodingTime } from "./Main";

const insolenceTime = 53;

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
    isStartTimerActive && timeFromGameStart < insolenceTime;
  return (
    <section className={`${styles.persona}`}>
      <div className={`${styles.vertical} ${styles.top}`}>
        <div className={styles.confinedSpace}>
          <PersonaButton
            hasPersona={hasConfinedSpace}
            setHasPersona={setHasConfinedSpace}
          >
            閉鎖空間
          </PersonaButton>
        </div>
        <div className={styles.wantedOrder}>
          <PersonaButton
            hasPersona={hasWantedOrder}
            setHasPersona={setHasWantedOrder}
          >
            指名
            <br />
            手配
          </PersonaButton>
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={`${styles.horizontal} ${styles.left}`}>
          <button
            className={`${
              hasInsolence
                ? colors.red
                : isInsolenceTimerActive
                ? colors.yellow
                : colors.green
            } ${styles.button}`}
            onClick={() => {
              setHasInsolence(!hasInsolence);
            }}
          >
            {isInsolenceTimerActive && insolenceTime - timeFromGameStart}
            傲慢
          </button>
        </div>
        <div className={`${styles.horizontal} ${styles.right}`}>
          <PersonaButton
            hasPersona={hasTrumpCard}
            setHasPersona={setHasTrumpCard}
          >
            裏向き
            <br />
            カード
          </PersonaButton>
        </div>
      </div>
      <div className={`${styles.vertical} ${styles.bottom}`}>
        <PersonaButton
          hasPersona={hasDetention}
          setHasPersona={setHasDetention}
        >
          引き留める
        </PersonaButton>
      </div>
    </section>
  );
};
