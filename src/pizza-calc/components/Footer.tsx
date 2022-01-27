import styles from "pizza-calc/components/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.linkWrapper}>
        <div>
          <a
            href="https://www.dominos.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ドミノピザ
          </a>
        </div>
        <div>
          <a
            href="https://www.pizza-la.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ピザーラ
          </a>
        </div>
        <div>
          <a
            href="https://www.pizzahut.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ピザハット
          </a>
        </div>
        <div>
          <a
            href="https://www.napolipizza.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ナポリの窯
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/konio_tracy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.twitter}
              src="pizza-calc/twitter.svg"
              alt="開発者のTwitter"
            />
          </a>
        </div>
      </section>
    </footer>
  );
};
