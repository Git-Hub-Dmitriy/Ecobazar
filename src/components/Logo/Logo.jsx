import * as style from "./Logo.module.scss";
import IconLogo from "@assets/iconLogo.svg";

export default function Logo({ colorText }) {
  return (
    <div className={style.logo}>
      <IconLogo className={style.logo__icon} />
      <p className={style.logo__title} style={{ color: colorText }}>
        Ecobazar
      </p>
    </div>
  );
}
