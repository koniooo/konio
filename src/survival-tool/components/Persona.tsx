import styles from "./Persona.module.scss";
import { PersonaButton } from "./PersonaButton";

type Props = {
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
          <PersonaButton
            hasPersona={hasInsolence}
            setHasPersona={setHasInsolence}
          >
            傲慢
          </PersonaButton>
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
