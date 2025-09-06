import * as style from "./AccountSection.module.scss";
import { NavLink } from "react-router-dom";

export default function AccountSection({ active }) {
  return (
    <>
      <div className={style.information__accountSection}>
        <h1>My Account</h1>
        <NavLink className={active} to="account/dashboard">
          My Account
        </NavLink>
        <NavLink className={active} to="account/orderHistory">
          Order History
        </NavLink>
        <h1>Shoping Cart</h1>
        <NavLink className={active} to="account/accountWishlist">
          Wishlist
        </NavLink>
      </div>
    </>
  );
}
