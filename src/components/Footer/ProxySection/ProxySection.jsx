import * as style from "./ProxySection.module.scss";
import { NavLink } from "react-router-dom";

export default function ProxySection({ active }) {
  return (
    <>
      <div className={style.information__proxySection}>
        <h1>Proxy</h1>
        <NavLink className={active} to="about">
          About
        </NavLink>
        <NavLink className={active} to="shop">
          Shop
        </NavLink>
        <NavLink className={active} to="shop">
          Product
        </NavLink>
        <NavLink className={active} to="ordersHistory">
          Track Order
        </NavLink>
      </div>
    </>
  );
}
