import styles from "pizza-calc/components/Label.module.scss";

export const Label = () => {
  return (
    <section className={`${styles.labelSec} ${styles.row}`}>
      <div>
        <h2>直径📐</h2>
      </div>
      <div>
        <h2>価格💰</h2>
      </div>
      <div className={styles.base}>
        <h2>
          基準の
          <br />
          ピザ🍕
        </h2>
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
