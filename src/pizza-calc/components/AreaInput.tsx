import { getRoundedNum } from "../lib/getRoundedNum";

export const AreaInput = (props) => {
  const areaRounded = getRoundedNum(props.area, 10);
  const areaOnChange = (event) => {
    const input: number = Number(event.target.value);
    const diameterFromArea = Math.sqrt(input / Math.PI) * 2;
    const diameterFromAreaRounded = getRoundedNum(diameterFromArea, 10000);
    props.onDiameterChange(diameterFromAreaRounded);
  };
  return (
    <section className="each-column">
      <div>
        <input
          className="area"
          type="number"
          placeholder="面積"
          min="0"
          step="1"
          value={areaRounded}
          onChange={areaOnChange}
        />
      </div>
    </section>
  );
};
