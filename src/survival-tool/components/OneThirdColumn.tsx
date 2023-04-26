import styles from "./OneThirdColumn.module.scss";
type Props = {
  children: React.ReactNode;
};
export const OneThirdColumn = ({ children }: Props) => {
  return <section className={styles.oneThirdColumn}>{children}</section>;
};
