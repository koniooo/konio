import styles from "pizza-calc/components/EachColumn.module.scss";

type Props = {
  index: number;
  diameter: number | undefined;
  setDiameter: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const DiameterInput = ({ index, diameter, setDiameter }: Props) => {
  const diameterOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const input = event.target.value;
    if (input === "") {
      setDiameter(undefined);
    } else {
      setDiameter(Number(input));
    }
  };
  return (
    <section className={styles.eachColumn}>
      <div>
        <input
          className={styles.diameter}
          type="number"
          inputMode="decimal"
          placeholder={index === 0 ? "23" : undefined}
          name="diameter"
          min="0"
          step="1"
          value={diameter}
          onChange={diameterOnChange}
        />
        <span className={styles.unit}>cm</span>
      </div>
    </section>
  );
};
