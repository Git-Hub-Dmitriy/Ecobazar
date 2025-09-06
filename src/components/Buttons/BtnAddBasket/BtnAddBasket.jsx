import * as style from "./BtnAddBasket.module.scss";
import IconBasket from "@assets/iconBasket.svg";
import { useDispatch, useSelector } from "react-redux";
import { resetProduct } from "@store/reducers/amountProductSlice";
import { addShoppingCart } from "@store/reducers/shoppingCartSlice";
import { useState } from "react";

export default function BtnAddBasket({ activeCard, product }) {
  const dispatch = useDispatch();
  const amountProduct = useSelector((store) => store.counter.value);
  const shopping = useSelector((store) => store.shoppingCart.shoppingCart);
  const found = shopping.find((item) => item.id === product.id);
  const [state, setState] = useState(null);

  function g() {
    switch (state) {
      case true: {
        return "Уже добавлен";
      }
      case false: {
        return "добавлен";
      }
      default: {
        return false;
      }
    }
  }

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            addShoppingCart({ product: product, amount: amountProduct })
          );
          dispatch(resetProduct(1));
          if (found) {
            setState(true);
          } else {
            setState(false);
          }
        }}
        className={style.btnAddBasket}
      >
        <p className={style.btnAddBasket__title}>Add to Cart</p>
        <IconBasket
          className={style.btnAddBasket__icon}
          stroke={activeCard === product?.id ? "#ffffff" : "#1a1a1a"}
        />
        <div style={{ fontSize: "2em", color: "black" }}>{g()}</div>
      </button>
    </>
  );
}
