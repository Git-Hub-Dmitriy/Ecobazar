import * as style from "./LinkBasket.module.scss";
import IconBasket from "@assets/iconBasket.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LinkBasket() {
  const shoppingCart = useSelector((store) => store.shoppingCart.shoppingCart);
  const total = shoppingCart.reduce((acum, item) => {
    const b = item.amount * item.price.slice(1);
    acum = acum + b;
    return acum;
  }, 0);

  return (
    <NavLink to="shoppingCart" className={style.linkBasket}>
      <div className={style.linkBasket__counter}>{shoppingCart.length}</div>
      <IconBasket stroke={"#1a1a1a"} className={style.linkBasket__icon} />
      <div className={style.linkBasket__inner}>
        <p className={style.linkBasket__title}>Shopping cart:</p>
        <p className={style.linkBasket__price}>{`$ ${total.toFixed(2)}`}</p>
      </div>
    </NavLink>
  );
}
