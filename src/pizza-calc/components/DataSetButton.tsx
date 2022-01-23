import { pizzaData } from "pizza-calc/lib/pizzaData";
import styles from "pizza-calc/components/DataSetButton.module.scss";
interface DataSetButtonProps {
  index: number;
  onDiameterChange: any;
  onPriceChange: any;
}
export const DataSetButton = (props: DataSetButtonProps) => {
  const pizzaDatum = pizzaData[props.index];
  const buttonOnClick = () => {
    props.onDiameterChange[0](pizzaDatum.diameter[0]);
    props.onDiameterChange[1](pizzaDatum.diameter[1]);
    props.onDiameterChange[2](pizzaDatum.diameter[2]);
    props.onPriceChange[0](pizzaDatum.price[0]);
    props.onPriceChange[1](pizzaDatum.price[1]);
    props.onPriceChange[2](pizzaDatum.price[2]);
  };
  let storeName = "";
  if (props.index === 0) {
    storeName = styles.dominos;
  } else if (props.index === 1) {
    storeName = styles.pizaLa;
  } else if (props.index === 2) {
    storeName = styles.pizzaHut;
  } else if (props.index === 3) {
    storeName = styles.nappoli;
  }
  return (
    <div className={styles.div}>
      <button className={storeName} onClick={buttonOnClick}>
        {pizzaDatum.name}
      </button>
    </div>
  );
};
