import * as style from "./SectionCurrency.module.scss";
import IconArrow from "@assets/iconArrowDown.svg";
import { Link } from "react-router-dom";

export default function SectionCurrency() {
  return (
    <div className={style.sectionCurrency}>
      <div className={style.sectionCurrency__wrap}>
        <div className={style.sectionCurrency__inner}>
          <div className={style.sectionCurrency__languages}>
            <p className={style.sectionCurrency__language}>Eng</p>
            <IconArrow
              stroke={"#1a1a1a"}
              className={style.sectionCurrency__iconArrow}
            />
          </div>
          <div className={style.sectionCurrency__currencies}>
            <p className={style.sectionCurrency__currency}>USD</p>
            <IconArrow
              stroke={"#1a1a1a"}
              className={style.sectionCurrency__iconArrow}
            />
          </div>
        </div>
        <Link to={"/login"} className={style.sectionCurrency__authorizate}>
          Sign in / Sign Up
        </Link>
      </div>
    </div>
  );
}
