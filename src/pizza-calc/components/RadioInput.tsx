import styles from "pizza-calc/components/EachColumn.module.scss";

export const RadioInput = (props) => {
  const radioOnClicked = () => {
    props.onBaseIndexChange(props.index);
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
