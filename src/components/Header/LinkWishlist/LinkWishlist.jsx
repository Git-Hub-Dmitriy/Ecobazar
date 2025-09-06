import * as style from "./LinkWishlist.module.scss";
import IconHeart from "@assets/iconHeart.svg";
import { NavLink } from "react-router-dom";

export default function LinkWishlist() {
  return (
    <NavLink to="wishlist" className={style.linkWishlist}>
      <IconHeart stroke={"#1a1a1a"} className={style.linkWishlist__icon} />
    </NavLink>
  );
}
