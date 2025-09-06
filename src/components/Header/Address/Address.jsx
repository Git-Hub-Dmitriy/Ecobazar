import * as style from "./Address.module.scss";
import IconMarker from "@assets/iconMarkerAddress.svg";

export default function Address() {
  return (
    <div className={style.address}>
      <div className={style.address__box}>
        <IconMarker stroke={"#B3B3B3"} className={style.address__iconPoint} />
        <p className={style.address__text}>
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </div>
    </div>
  );
}
