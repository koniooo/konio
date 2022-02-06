import styles from "pizza-calc/components/EachColumn.module.scss";

type Props = {
  index: number;
  baseIndex: number;
  setBaseIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const RadioInput = ({ index, baseIndex, setBaseIndex }: Props) => {
  const radioOnClicked = () => {
    setBaseIndex(index);
  };
  return (
    <section className={`${styles.eachColumn} ${styles.base}`}>
      <div>
        <input
          className={styles.base}
          type="radio"
          name="base"
          onChange={radioOnClicked}
          checked={index === baseIndex}
        />
      </div>
    </section>
  );
};
