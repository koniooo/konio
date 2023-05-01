import styles from "./TwoThirdColumn.module.scss";
type Props = {
  children: React.ReactNode;
};
export const TwoThirdColumn = ({ children }: Props) => {
  return <section className={styles.twoThirdColumn}>{children}</section>;
};
