import * as style from "./CategoriesLink.module.scss";
import { categories } from "@data/categories";
import { useNavigate } from "react-router-dom";

export default function CategoriesLink() {
  const fruit = categories.find((item) => item.id === 0);
  const meat = categories.find((item) => item.id === 2);
  const bread = categories.find((item) => item.id === 6);
  const vegetables = categories.find((item) => item.id === 1);
  const navigate = useNavigate();

  return (
    <>
      <div className={style.information__categoriesLink}>
        <h1 className={style.information__categoriesLinkTitle}>Categories</h1>
        <p
          onClick={() =>
            navigate("/shop", {
              state: { category: fruit.category.toLowerCase() },
            })
          }
          className={style.information__categoriesLinkName}
        >
          {fruit.name}
        </p>
        <p
          className={style.information__categoriesLinkName}
          onClick={() =>
            navigate("/shop", {
              state: { category: meat.category.toLowerCase() },
            })
          }
        >
          {meat.name}
        </p>
        <p
          className={style.information__categoriesLinkName}
          onClick={() =>
            navigate("/shop", {
              state: { category: bread.category.toLowerCase() },
            })
          }
        >
          {bread.name}
        </p>
        <p
          className={style.information__categoriesLinkName}
          onClick={() =>
            navigate("/shop", {
              state: { category: vegetables.category.toLowerCase() },
            })
          }
        >
          {vegetables.name}
        </p>
      </div>
    </>
  );
}
