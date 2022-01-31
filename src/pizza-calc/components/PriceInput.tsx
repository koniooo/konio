import styles from "pizza-calc/components/EachColumn.module.scss";

type Props = {
  index: number;
  price: number | undefined;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const PriceInput = (props: Props) => {
  const priceOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input === "") {
      props.setPrice(undefined);
    } else {
      props.setPrice(Number(input));
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
