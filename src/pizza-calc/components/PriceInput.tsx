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
          inputMode="decimal"
          name="price"
          placeholder={props.index === 0 ? "1980" : undefined}
          min="0"
          step="1"
          value={props.price}
          onChange={priceOnChange}
        />
        <span className={styles.unit}>円</span>
      </div>
    </section>
  );
};
