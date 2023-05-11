import styles from "./Persona.module.scss";
import { PersonaButton } from "./PersonaButton";
import { PersonaButtonWithTimer } from "./PersonaButtonWithTimer";

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
  return (
    <section className={`${styles.persona}`}>
      <div className={`${styles.vertical} ${styles.top}`}>
        <div className={styles.confinedSpace}>
          <PersonaButton
            hasPersona={hasConfinedSpace}
            setHasPersona={setHasConfinedSpace}
          >
            <p>閉鎖空間</p>
          </PersonaButton>
        </div>
        <div className={styles.wantedOrder}>
          <PersonaButton
            hasPersona={hasWantedOrder}
            setHasPersona={setHasWantedOrder}
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
          <PersonaButtonWithTimer
            persona="insolence"
            hasTrait={hasInsolence}
            setHasTrait={setHasInsolence}
            isStartTimerActive={isStartTimerActive}
            startTime={startTime}
          />
        </div>
        <div className={`${styles.horizontal} ${styles.right}`}>
          <PersonaButtonWithTimer
            persona="trumpCard"
            hasTrait={hasTrumpCard}
            setHasTrait={setHasTrumpCard}
            isStartTimerActive={isStartTimerActive}
            startTime={startTime}
          />
        </div>
      </div>
      <div className={`${styles.vertical} ${styles.bottom}`}>
        <PersonaButtonWithTimer
          persona="detention"
          hasTrait={hasDetention}
          setHasTrait={setHasDetention}
          isStartTimerActive={isStartTimerActive}
          startTime={startTime}
        />
      </div>
    </section>
  );
};
