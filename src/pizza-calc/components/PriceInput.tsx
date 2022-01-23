import styles from "pizza-calc/components/EachColumn.module.scss";

export const PriceInput = (props) => {
  const priceOnChange = (event) => {
    const input = event.target.value;
    if (input === "") {
      props.onPriceChange(null);
    } else {
      props.onPriceChange(Number(input));
    }
  };
  return (
    <section className={styles.eachColumn}>
      <div>
        <input
          className={styles.price}
          type="number"
          inputMode="numeric"
          name="price"
          // placeholder="価格"
          min="0"
          step="1"
          value={props.price}
          onChange={priceOnChange}
        />
        <span>円</span>
      </div>
    </section>
  );
};
