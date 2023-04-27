import styles from "survival-tool/components/PersonaButton.module.scss";
import colors from "./ButtonColor.module.scss";

type Props = {
  hasPersona: boolean;
  setHasPersona: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const PersonaButton = ({
  hasPersona,
  setHasPersona,
  children,
}: Props) => {
  return (
    <button
      className={`${hasPersona ? colors.red : colors.green} ${styles.button}`}
      onClick={() => {
        setHasPersona(!hasPersona);
      }}
    >
      {children}
    </button>
  );
};
