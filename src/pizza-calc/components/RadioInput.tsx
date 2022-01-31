import styles from "pizza-calc/components/EachColumn.module.scss";

type Props = {
  index: number;
  baseIndex: number;
  setBaseIndex: React.Dispatch<React.SetStateAction<number>>;
  diameter: number | undefined;
  price: number | undefined;
};

export const RadioInput = (props: Props) => {
  const radioOnClicked = () => {
    props.setBaseIndex(props.index);
  };
  return (
    <section className={`${styles.eachColumn} ${styles.base}`}>
      <div>
        <input
          className={styles.base}
          type="radio"
          name="base"
          onChange={radioOnClicked}
          checked={props.index === props.baseIndex}
        />
      </div>
    </section>
  );
};
