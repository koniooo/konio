import Head from "next/head";
import { Header } from "pizza-calc/components/Header";
import { Main } from "pizza-calc/components/Main";
import { Footer } from "pizza-calc/components/Footer";
import styles from "pizza-calc/components/Top.module.scss";
const Top = () => {
  return (
    <div className={styles.pizzaCalcTop}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <title>Pizza Calc｜ピザカルク</title>
        <meta
          name="description"
          content="ピザのコスパ（面積当たりの価格）を簡単に比較できる計算器。ドミノピザ、ピザーラ、ピザハット、ナポリの窯のデモデータを自動入力する機能付き。"
        />
        <meta name="theme-color" content="#21242d" />
        <meta property="og:url" content="https://koni.ooo/pizza-calc" />
        <meta property="og:title" content="Pizza Calc｜ピザカルク" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="ピザのコスパ（面積当たりの価格）を簡単に比較できる計算器。ドミノピザ、ピザーラ、ピザハット、ナポリの窯のデモデータを自動入力する機能付き。"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/koniooo/konio/main/public/pizza-calc/card2.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@konio_tracy" />
        <link
          rel="icon"
          href="pizza-calc/favicon_32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="pizza-calc/pizza.svg"
          type="image/svg+xml"
          sizes="any"
        />
        <link rel="apple-touch-icon" href="pizza-calc/apple_192.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Top;
