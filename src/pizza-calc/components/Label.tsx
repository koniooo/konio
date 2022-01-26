import styles from "pizza-calc/components/Label.module.scss";

export const Label = () => {
  return (
    <section className={`${styles.labelSec} ${styles.row}`}>
      <div>
        <label htmlFor="diameter">直径📐</label>
      </div>
      <div>
        <label htmlFor="price">価格💰</label>
      </div>
      <div className={styles.base}>
        <label htmlFor="base">
          基準の
          <br />
          ピザ🍕
        </label>
      </div>
      <div>
        <h2>
          1cm²
          <br />
          あたりの
          <br />
          価格💰
        </h2>
      </div>
      <div>
        <h2>
          基準の
          <br />
          ピザとの
          <br />
          比較👍👎
        </h2>
      </div>
      {/* <div>
        <h2>
          1円
          <br />
          あたりの
          <br />
          面積🧀
        </h2>
      </div> */}
    </section>
  );
};
