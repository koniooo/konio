import styles from "./HunterSelect.module.scss";
import { hunterData } from "survival-tool/lib/hunterData";

type Props = {
  hunterId: number;
  setHunterId: React.Dispatch<React.SetStateAction<number>>;
};

export const HunterSelect = ({ hunterId, setHunterId }: Props) => {
  return (
    <section className={styles.hunterSelect}>
      <select
        name="hunter"
        id="hunter-select"
        value={hunterId}
        onChange={(event) => {
          const targetValue = Number(event.target.value);
          setHunterId(targetValue);
          //   setPrimaryTime(hunterData[targetValue].primaryTime);
        }}
      >
        {hunterData.map((hunterDatum, index) => {
          return (
            <option value={index} key={index}>
              {hunterDatum.nameJa}
            </option>
          );
        })}
      </select>
    </section>
  );
};
