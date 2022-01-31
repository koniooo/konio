import { RadioInput } from "./RadioInput";
import { DiameterInput } from "./DiameterInput";
import { PriceInput } from "./PriceInput";
import { Comparison } from "./Comparison";
import { PricePerArea } from "./PricePerArea";
import { getCircleArea } from "../lib/getCircleArea";
import styles from "pizza-calc/components/Calc.module.scss";
type Props = {
  key: number;
  index: number;
  baseIndex: number;
  basePrice: number | undefined;
  baseDiameter: number | undefined;
  setBaseIndex: React.Dispatch<React.SetStateAction<number>>;
  diameter: number | undefined;
  price: number | undefined;
  setDiameter: React.Dispatch<React.SetStateAction<number | undefined>>;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const Calc = (props: Props) => {
  const diameter = props.diameter;
  const price = props.price;
  const area = typeof diameter === "number" ? getCircleArea(diameter) : NaN;

  const pricePerArea = typeof price === "number" ? price / area : NaN;

  return (
    <section className={`${styles.eachPizza} ${styles.row}`}>
      <DiameterInput
        index={props.index}
        diameter={props.diameter}
        setDiameter={props.setDiameter}
      />
      <PriceInput
        index={props.index}
        price={props.price}
        setPrice={props.setPrice}
      />
      <RadioInput
        index={props.index}
        baseIndex={props.baseIndex}
        setBaseIndex={props.setBaseIndex}
        diameter={props.diameter}
        price={props.price}
      />
      <PricePerArea pricePerArea={pricePerArea} />
      <Comparison
        index={props.index}
        baseIndex={props.baseIndex}
        pricePerArea={pricePerArea}
        baseDiameter={props.baseDiameter}
        basePrice={props.basePrice}
      />
    </section>
  );
};
