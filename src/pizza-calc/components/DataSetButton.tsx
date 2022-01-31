import { pizzaData } from "pizza-calc/lib/pizzaData";
import styles from "pizza-calc/components/DataSetButton.module.scss";
import { DataSetButtonProps } from "pizza-calc/components/Main";

export const DataSetButton = (props: DataSetButtonProps) => {
  const pizzaDatum = pizzaData[props.index];
  const buttonOnClick = () => {
    props.setPizzaDataDiameters[0](pizzaDatum.diameter[0]);
    props.setPizzaDataDiameters[1](pizzaDatum.diameter[1]);
    props.setPizzaDataDiameters[2](pizzaDatum.diameter[2]);
    props.setPizzaDataPrices[0](pizzaDatum.price[0]);
    props.setPizzaDataPrices[1](pizzaDatum.price[1]);
    props.setPizzaDataPrices[2](pizzaDatum.price[2]);
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
