import Head from "next/head";
import { Main } from "./Main";
const Top = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <title>第五人格サバイバルツール</title>
        <meta
          name="description"
          content="ハンタースキルのクールタイム管理からダブルタップ計算器まで、サバイバーに役立つ機能が揃ったツール。焼き入れ効果や裏向きカードにも対応！"
        />
        <meta name="theme-color" content="#292b2f" />
        <meta property="og:url" content="https://koni.ooo/survival-tool" />
        <meta property="og:title" content="第五人格サバイバルツール" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="ハンタースキルのクールタイム管理からダブルタップ計算器まで、サバイバーに役立つ機能が揃ったツール。焼き入れ効果や裏向きカードにも対応！"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/koniooo/IdentityV-SurvivalTool/master/png/card.png"
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
      <Main />
    </>
  );
};

export default Top;
