import Head from "next/head";
import styles from "components/Top.module.scss";

export const Top = () => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <title>こにおの個人ブログ</title>
        <meta name="description" content="こにおの個人ブログ" />
        <link rel="icon" href="pizza-calc/pizza.svg" />
      </Head>
      <main className={styles.main}>
        <p>
          Moving from{` `}
          <a
            href="https://koniokun.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the old blog
          </a>
          ...
        </p>
      </main>
    </div>
  );
};
