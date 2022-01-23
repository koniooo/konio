import styles from "pizza-calc/components/EachColumn.module.scss";

export const DiameterInput = (props) => {
  const diameterOnChange = (event) => {
    const input = event.target.value;
    if (input === "") {
      props.onDiameterChange(null);
    } else {
      props.onDiameterChange(Number(input));
    }
  };
  return (
    <section className={styles.eachColumn}>
      <div>
        <input
          className={styles.diameter}
          type="number"
          inputMode="decimal"
          // placeholder="直径"
          name="diameter"
          min="0"
          step="1"
          value={props.diameter}
          onChange={diameterOnChange}
        />
        <span>cm</span>
      </div>
    </section>
  );
};
