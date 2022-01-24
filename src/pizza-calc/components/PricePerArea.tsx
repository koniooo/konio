import { getRoundedNum } from "../lib/getRoundedNum";
import styles from "pizza-calc/components/EachColumn.module.scss";

export const PricePerArea = (props) => {
  const pricePerArea = props.pricePerArea;
  let content;
  if (Number.isNaN(pricePerArea)) {
    content = <p>-</p>;
  } else if (pricePerArea === Infinity) {
    content = <p>∞ 円</p>;
  } else {
    const pricePerAreaRounded = getRoundedNum(pricePerArea, 100);
    content = <p>{pricePerAreaRounded} 円</p>;
  }
  return (
    <section className={styles.eachColumn}>
      <div>{content}</div>
    </section>
  );
};
