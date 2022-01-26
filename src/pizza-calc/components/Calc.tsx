import { RadioInput } from "./RadioInput";
import { DiameterInput } from "./DiameterInput";
import { PriceInput } from "./PriceInput";
import { Comparison } from "./Comparison";
import { PricePerArea } from "./PricePerArea";
import { getCircleArea } from "../lib/getCircleArea";
import styles from "pizza-calc/components/Calc.module.scss";
interface ItemProps {
  key: number;
  index: number;
  baseIndex: number | null;
  basePrice: number | null;
  baseDiameter: number | null;
  onBaseIndexChange: any;
  diameter: number | null;
  price: number | null;
  onDiameterChange: any;
  onPriceChange: any;
}

export const Calc = (props: ItemProps) => {
  const diameter = props.diameter;
  const price = props.price;
  const area = typeof diameter === "number" ? getCircleArea(diameter) : NaN;

  const pricePerArea = typeof price === "number" ? price / area : NaN;

  return (
    <section className={`${styles.eachPizza} ${styles.row}`}>
      <DiameterInput
        index={props.index}
        diameter={props.diameter}
        onDiameterChange={props.onDiameterChange}
      />
      {/* <AreaInput area={area} onDiameterChange={props.onDiameterChange} /> */}
      <PriceInput
        index={props.index}
        price={props.price}
        onPriceChange={props.onPriceChange}
      />
      <RadioInput
        index={props.index}
        baseIndex={props.baseIndex}
        onBaseIndexChange={props.onBaseIndexChange}
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
