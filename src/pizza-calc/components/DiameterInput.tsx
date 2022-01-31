import styles from "pizza-calc/components/EachColumn.module.scss";

type Props = {
  index: number;
  diameter: number | undefined;
  setDiameter: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const DiameterInput = (props: Props) => {
  const diameterOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const input = event.target.value;
    if (input === "") {
      props.setDiameter(undefined);
    } else {
      props.setDiameter(Number(input));
    }
  };
  return (
    <section className={styles.eachColumn}>
      <div>
        <input
          className={styles.diameter}
          type="number"
          inputMode="decimal"
          placeholder={props.index === 0 ? "23" : undefined}
          name="diameter"
          min="0"
          step="1"
          value={props.diameter}
          onChange={diameterOnChange}
        />
        <span className={styles.unit}>cm</span>
      </div>
    </section>
  );
};
