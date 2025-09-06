import classNames from "classnames";
import * as style from "./Footer.module.scss";
import Subscribe from "@components/Forms/Subscribe/Subscribe";
import BlockContact from "./BlockContact/BlockContact";
import AccountSection from "./AccountSection/AccountSection";
import HelpsSection from "./HelpsSection/HelpsSection";
import ProxySection from "./ProxySection/ProxySection";
import CategoriesLink from "./CategoriesLink/CategoriesLink";
import SocialMedia from "@components/SocialMedia/SocialMedia";
import IconsPayment from "./IconsPayment/IconsPayment";

export default function Footer() {
  const active = ({ isActive }) => (isActive ? style.active : style.noActive);

  return (
    <>
      <footer className={style.footer}>
        <div className={classNames(style.subscription, style.footer__row)}>
          <div className={style.subscription__innerLeft}>
            <h1 className={style.subscription__title}>
              Subcribe our Newsletter
            </h1>
            <h3 className={style.subscription__text}>
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </h3>
          </div>
          <Subscribe />
          <SocialMedia />
        </div>
        <div className={classNames(style.information, style.footer__row)}>
          <div className={style.information__wrap}>
            <div className={style.information__info}>
              <div className={style.information__innerContact}>
                <BlockContact />
              </div>
              <div className={style.information__innerNav}>
                <AccountSection active={active} />
                <HelpsSection active={active} />
                <ProxySection active={active} />
                <CategoriesLink />
              </div>
            </div>
            <div className={style.information__line}></div>
            <div className={style.information__social}>
              <h2 className={style.information__rights}>
                Ecobazar eCommerce © 2021. All Rights Reserved
              </h2>
              <IconsPayment />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
