import styles from "pizza-calc/components/Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logoSec}>
        <img src="pizza-calc/logo.svg" alt="ðPizza Calc" draggable="false" />
        <p>ãã¶ã®ã³ã¹ããç°¡åã«æ¯è¼ã§ããè¨ç®å¨</p>
      </section>
    </header>
  );
};
