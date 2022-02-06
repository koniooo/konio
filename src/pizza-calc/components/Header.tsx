import styles from "pizza-calc/components/Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logoSec}>
        <img src="pizza-calc/logo.svg" alt="🍕Pizza Calc" draggable="false" />
        <p>ピザのコスパを簡単に比較できる計算器</p>
      </section>
    </header>
  );
};
