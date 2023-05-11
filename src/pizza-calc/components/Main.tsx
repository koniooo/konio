import { useState } from "react";
import { Label } from "./Label";
import { Calc } from "./Calc";
import { DataSetButton } from "./DataSetButton";
import styles from "src/pizza-calc/components/Main.module.scss";

export type DataSetButtonProps = {
  key: number;
  index: number;
  setPizzaDataDiameters: React.Dispatch<
    React.SetStateAction<number | undefined>
  >[];
  setPizzaDataPrices: React.Dispatch<
    React.SetStateAction<number | undefined>
  >[];
};

export const Main = () => {
  const [diameter0, setDiameter0] = useState<number | undefined>(undefined);
  const [diameter1, setDiameter1] = useState<number | undefined>(undefined);
  const [diameter2, setDiameter2] = useState<number | undefined>(undefined);
  const [diameter3, setDiameter3] = useState<number | undefined>(undefined);
  const [diameter4, setDiameter4] = useState<number | undefined>(undefined);
  const [price0, setPrice0] = useState<number | undefined>(undefined);
  const [price1, setPrice1] = useState<number | undefined>(undefined);
  const [price2, setPrice2] = useState<number | undefined>(undefined);
  const [price3, setPrice3] = useState<number | undefined>(undefined);
  const [price4, setPrice4] = useState<number | undefined>(undefined);

  const diameters = [diameter0, diameter1, diameter2, diameter3, diameter4];
  const setDiameters = [
    setDiameter0,
    setDiameter1,
    setDiameter2,
    setDiameter3,
    setDiameter4,
  ];
  const prices = [price0, price1, price2, price3, price4];
  const setPrices = [setPrice0, setPrice1, setPrice2, setPrice3, setPrice4];

  const [baseIndex, setBaseIndex] = useState(0);

  let calcList: React.ReactElement<any, any>[] = [];

  for (let i = 0; i < 5; i++) {
    calcList.push(
      <Calc
        key={i}
        index={i}
        baseIndex={baseIndex}
        baseDiameter={diameters[baseIndex]}
        basePrice={prices[baseIndex]}
        setBaseIndex={setBaseIndex}
        diameter={diameters[i]}
        price={prices[i]}
        setDiameter={setDiameters[i]}
        setPrice={setPrices[i]}
      />
    );
  }

  let buttonList: React.ReactElement<any, any>[] = [];
  for (let i = 0; i < 4; i++) {
    buttonList.push(
      <DataSetButton
        key={i}
        index={i}
        setPizzaDataDiameters={[setDiameter0, setDiameter1, setDiameter2]}
        setPizzaDataPrices={[setPrice0, setPrice1, setPrice2]}
      />
    );
  }

  return (
    <main className={styles.main}>
      <section className={styles.calcSec}>
        <Label />
        <section className={styles.pizzaSec}>{calcList}</section>
      </section>
      <section className={styles.buttonSec}>
        <section className={styles.buttonCopy}>
          <p>下のボタンは各店のマルゲリータのデータを自動入力します🍅</p>
        </section>
        <section className={styles.button}>{buttonList}</section>
      </section>
    </main>
  );
};
