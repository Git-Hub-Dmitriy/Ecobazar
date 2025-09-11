import * as style from "./SectionCurrency.module.scss";
import IconArrow from "@assets/iconArrowDown.svg";
import { NavLink } from "react-router-dom";
import IconMarker from "@assets/iconMarkerAddress.svg";

export default function SectionCurrency() {
  return (
    <section className={style.sectionCurrency}>
      <div className={style.sectionCurrency__innerAddress}>
        <IconMarker
          stroke={"#B3B3B3"}
          className={style.sectionCurrency__iconPoint}
        />
        <h2 className={style.sectionCurrency__title}>
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </h2>
      </div>
      <div className={style.sectionCurrency__wrapCurrency}>
        <div className={style.sectionCurrency__wrapLanguage}>
          <div className={style.sectionCurrency__innerLanguage}>
            <p className={style.sectionCurrency__subtitle}>Eng</p>
            <IconArrow
              stroke={"#1a1a1a"}
              className={style.sectionCurrency__iconArrowDown}
            />
          </div>
          <div className={style.sectionCurrency__innerCurrency}>
            <p className={style.sectionCurrency__subtitle}>USD</p>
            <IconArrow
              stroke={"#1a1a1a"}
              className={style.sectionCurrency__iconArrowDown}
            />
          </div>
        </div>
        <NavLink
          to={"/login"}
          className={style.sectionCurrency__innerLinkLogin}
        >
          Sign in / Sign Up
        </NavLink>
      </div>
    </section>
  );
}
