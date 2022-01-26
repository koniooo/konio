import { getCircleArea } from "../lib/getCircleArea";
import { getRoundedNum } from "../lib/getRoundedNum";
import styles from "pizza-calc/components/EachColumn.module.scss";
export const Comparison = (props) => {
  const baseIsNumber: boolean = props.baseDiameter > 0 && props.basePrice > 0;
  const baseArea = getCircleArea(props.baseDiameter);
  const baseAreaPerPrice = props.basePrice / baseArea;
  const multiple = props.pricePerArea / baseAreaPerPrice;
  let content;
  if (props.index === props.baseIndex || Number.isNaN(multiple)) {
    content = <p>-</p>;
  } else if (multiple > 1) {
    const comparePercent = (multiple - 1) * 100;
    const comparePercentRounded = getRoundedNum(comparePercent, 10);
    const percentNumber =
      comparePercentRounded === Infinity ? "∞" : comparePercentRounded;
    content = (
      <p>
        <span className={styles.number}>{percentNumber}</span>%
        <br />
        割高👎
      </p>
    );
  } else {
    const comparePercent = (1 / multiple - 1) * 100;
    const comparePercentRounded = getRoundedNum(comparePercent, 10);
    const percentNumber =
      comparePercentRounded === Infinity ? "∞" : comparePercentRounded;
    content = (
      <p>
        <span className={styles.number}>{percentNumber}</span>%
        <br />
        お得👍
      </p>
    );
  }
  return (
    <section className={styles.eachColumn}>
      <div>{content}</div>
    </section>
  );
};
