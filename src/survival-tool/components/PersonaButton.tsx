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
      type="button"
      className={hasPersona ? colors.red : colors.green}
      onClick={() => {
        setHasPersona(!hasPersona);
      }}
    >
      {children}
    </button>
  );
};
