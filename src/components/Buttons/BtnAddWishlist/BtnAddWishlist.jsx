import * as style from "./BtnAddWishlist.module.scss";
import IconHeart from "@assets/iconHeart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProductWishlist } from "@store/reducers/wishlistSlice";
import { useState, useEffect } from "react";

export default function BtnAddWishlist({ product }) {
  const [modal, setModal] = useState({
    active: false,
    message: null,
  });
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlist.wishlist);
  const found = wishlist?.filter((item) => item.id === product.id);

  useEffect(() => {
    if (modal.active === true) {
      document.body.addEventListener(
        "keydown",
        function (event) {
          if (event.code === "Escape") {
            setModal({
              active: false,
              message: null,
            });
          }
          return;
        },
        { once: true }
      );
    }
  }, [modal.active]);

  return (
    <>
      <button
        onClick={() => {
          if (!found) {
            setModal({
              active: true,
              message: "This product added in your wishlist",
            });
            dispatch(addProductWishlist({ product: product, id: product.id }));
          } else {
            setModal({
              active: true,
              message: "this product already has been added in your wishlist",
            });
          }
        }}
        className={style.btnAddWishlist}
      >
        <IconHeart className={style.btnAddWishlist__icon} stroke={"#1a1a1a"} />
      </button>
      <div
        className={
          modal.active
            ? `${style.btnModal} ${style.btnModal_active}`
            : style.btnModal
        }
        onClick={() =>
          setModal({
            active: false,
            message: null,
          })
        }
      >
        <div
          className={
            modal.active
              ? `${style.btnModal__content} ${style.btnModal__content_active}`
              : style.btnModal__content
          }
          onClick={(e) => e.stopPropagation()}
        >
          {modal.message}
        </div>
      </div>
    </>
  );
}
