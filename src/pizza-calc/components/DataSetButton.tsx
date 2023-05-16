import { pizzaData } from "src/pizza-calc/lib/pizzaData";
import styles from "src/pizza-calc/components/DataSetButton.module.scss";
import { DataSetButtonProps } from "src/pizza-calc/components/Main";

export const DataSetButton = ({
  index,
  setPizzaDataDiameters,
  setPizzaDataPrices,
}: DataSetButtonProps) => {
  const pizzaDatum = pizzaData[index];
  const buttonOnClick = () => {
    setPizzaDataDiameters[0](pizzaDatum.diameter[0]);
    setPizzaDataDiameters[1](pizzaDatum.diameter[1]);
    setPizzaDataDiameters[2](pizzaDatum.diameter[2]);
    setPizzaDataPrices[0](pizzaDatum.price[0]);
    setPizzaDataPrices[1](pizzaDatum.price[1]);
    setPizzaDataPrices[2](pizzaDatum.price[2]);
  };
  let storeName = "";
  if (index === 0) {
    storeName = styles.dominos;
  } else if (index === 1) {
    storeName = styles.pizaLa;
  } else if (index === 2) {
    storeName = styles.pizzaHut;
  } else if (index === 3) {
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
