import Link from "next/link";
import styles from "pizza-calc/components/header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logoSec}>
        <Link href="/pizza-calc">
          <a>
            <h1>🍕Pizza Calc</h1>
          </a>
        </Link>
        <p>ピザのコスパを簡単に比較できる計算器</p>
      </section>
    </header>
  );
};
