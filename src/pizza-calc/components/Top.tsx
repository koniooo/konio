import Head from "next/head";
import { Header } from "pizza-calc/components/Header";
import { Main } from "pizza-calc/components/Main";
import { Footer } from "pizza-calc/components/Footer";
import styles from "pizza-calc/components/Top.module.scss";
const Top = () => {
  return (
    <div className={styles.pizzaCalcTop}>
      <article className={styles.article}>
        <Head>
          <title>Pizza Calc | ピザカルク</title>
          <meta name="description" content="" />
          <link rel="icon" href="../../../public/pizza.svg" />
        </Head>
        <Header />
        <Main />
        <Footer />
      </article>
    </div>
  );
};

export default Top;
