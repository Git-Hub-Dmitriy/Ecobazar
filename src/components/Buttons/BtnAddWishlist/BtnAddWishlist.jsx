import * as style from "./BtnAddWishlist.module.scss";
import IconHeart from "@assets/iconHeart.svg";

export default function BtnAddWishlist({ product }) {
  return (
    <button className={style.btnAddWishlist}>
      <IconHeart className={style.btnAddWishlist__icon} stroke={"#1a1a1a"} />
    </button>
  );
}
