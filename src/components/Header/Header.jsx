import * as style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import Search from "@components/Forms/Search/Search";
import Logo from "@components/Logo/Logo";
import Address from "./Address/Address";
import SectionCurrency from "./SectionCurrency/SectionCurrency";
import LinkWishlist from "./LinkWishlist/LinkWishlist";
import LinkBasket from "./LinkBasket/LinkBasket";
import PagesLinks from "./PagesLinks/PagesLinks";
import IconPhone from "@assets/iconPhone.svg";
import IconProfile from "@assets/iconProfile.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={`${style.sectionTop} ${style.header__row}`}>
          <div className={style.sectionTop__wrap}>
            <Address />
            <SectionCurrency />
          </div>
        </div>
        <div className={classNames(style.sectionMiddle, style.header__row)}>
          <div className={style.sectionMiddle__wrap}>
            <Logo colorTitle="#002603" />
            <Search />
            <div className={style.sectionMiddle__wrapBusket}>
              <LinkWishlist />
              <LinkBasket />
            </div>
          </div>
        </div>
        <div className={`${style.sectionBottom} ${style.header__row}`}>
          <div className={style.sectionBottom__wrap}>
            <PagesLinks />
            <div className={style.sectionBottom__inner}>
              <Link className={style.sectionBottom__tel} to="tel:2195550114">
                <IconPhone
                  stroke={"#ffffff"}
                  className={style.sectionBottom__icon}
                />
                (219) 555-0114
              </Link>
              <NavLink
                className={style.sectionBottom__linkAccountPage}
                to="account/dashboard"
              >
                <IconProfile
                  stroke={"#ffffff"}
                  className={style.sectionBottom__iconUser}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
