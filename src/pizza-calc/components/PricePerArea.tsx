import { getRoundedNum } from "../lib/getRoundedNum";
import styles from "pizza-calc/components/EachColumn.module.scss";

type Props = {
  pricePerArea: number;
};

export const PricePerArea = (props: Props) => {
  const pricePerArea = props.pricePerArea;
  let content;
  if (Number.isNaN(pricePerArea)) {
    content = <p>-</p>;
  } else if (pricePerArea === Infinity) {
    content = (
      <p>
        <span className={styles.number}>∞ </span>円
      </p>
    );
  } else {
    const pricePerAreaRounded = getRoundedNum(pricePerArea, 100);
    content = (
      <p>
        <span className={styles.number}>{pricePerAreaRounded} </span>円
      </p>
    );
  }
  return (
    <section className={styles.eachColumn}>
      <div>{content}</div>
    </section>
  );
};
