import { RadioInput } from "./RadioInput";
import { DiameterInput } from "./DiameterInput";
import { PriceInput } from "./PriceInput";
import { Comparison } from "./Comparison";
import { PricePerArea } from "./PricePerArea";
import { getCircleArea } from "../lib/getCircleArea";
import styles from "pizza-calc/components/Calc.module.scss";
type Props = {
  index: number;
  baseIndex: number;
  setBaseIndex: React.Dispatch<React.SetStateAction<number>>;
  basePrice: number | undefined;
  baseDiameter: number | undefined;
  diameter: number | undefined;
  setDiameter: React.Dispatch<React.SetStateAction<number | undefined>>;
  price: number | undefined;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const Calc = ({
  index,
  baseIndex,
  setBaseIndex,
  basePrice,
  baseDiameter,
  diameter,
  setDiameter,
  price,
  setPrice,
}: Props) => {
  const area = typeof diameter === "number" ? getCircleArea(diameter) : NaN;

  const pricePerArea = typeof price === "number" ? price / area : NaN;

  return (
    <section className={`${styles.eachPizza} ${styles.row}`}>
      <DiameterInput
        index={index}
        diameter={diameter}
        setDiameter={setDiameter}
      />
      <PriceInput index={index} price={price} setPrice={setPrice} />
      <RadioInput
        index={index}
        baseIndex={baseIndex}
        setBaseIndex={setBaseIndex}
      />
      <PricePerArea pricePerArea={pricePerArea} />
      <Comparison
        index={index}
        baseIndex={baseIndex}
        pricePerArea={pricePerArea}
        baseDiameter={baseDiameter}
        basePrice={basePrice}
      />
    </section>
  );
};
