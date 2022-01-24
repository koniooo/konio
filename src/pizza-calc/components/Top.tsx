import Head from "next/head";
import { Header } from "pizza-calc/components/Header";
import { Main } from "pizza-calc/components/Main";
import { Footer } from "pizza-calc/components/Footer";
import styles from "pizza-calc/components/Top.module.scss";
const Top = () => {
  return (
    <div className={styles.pizzaCalcTop}>
      <Head>
        <title>Pizza Calc | ピザカルク</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <link rel="icon" href="pizza-calc/pizza.svg" />
      </Head>
      <article className={styles.article}>
        <Header />
        <Main />
        <Footer />
      </article>
    </div>
  );
};

export default Top;
