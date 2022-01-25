import Link from "next/link";
import styles from "pizza-calc/components/Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logoSec}>
        <Link href="/pizza-calc">
          <a>
            <img
              src="pizza-calc/logo.svg"
              alt="🍕Pizza Calc"
              draggable="false"
            />
          </a>
        </Link>
        <p>ピザのコスパを簡単に比較できる計算器</p>
      </section>
    </header>
  );
};
