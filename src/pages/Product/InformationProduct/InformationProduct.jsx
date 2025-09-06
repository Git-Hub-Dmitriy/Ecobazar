import * as style from "./InformationProduct.module.scss";
import { useParams } from "react-router-dom";
import { products } from "@data/products";
import IconLeaf from "@assets/iconLeaf.svg";
import IconDiscount from "@assets/iconDiscount.svg";

export default function InformationProduct() {
  const { id } = useParams();
  const card = products.find((item) => item.id == id);
  return (
    <section className={style.information_product}>
      <div className={style.information_product__wrapDescription}>
        <div className={style.information_product__innerTitle}>
          <h3 className={style.information_product__title}>Weight:</h3>
          <h3 className={style.information_product__title}>Color:</h3>
          <h3 className={style.information_product__title}>Type:</h3>
          <h3 className={style.information_product__title}>Category:</h3>
          <h3 className={style.information_product__title}>Stock Status:</h3>
          <h3 className={style.information_product__title}>Tags:</h3>
        </div>
        <div className={style.information_product__innerCharacteristic}>
          <h3 className={style.information_product__characteristic}>
            {card.weight}
          </h3>
          <h3 className={style.information_product__characteristic}>
            {card.color}
          </h3>
          <h3 className={style.information_product__characteristic}>
            {card.type}
          </h3>
          <h3 className={style.information_product__characteristic}>
            {card.category}
          </h3>
          <h3 className={style.information_product__characteristic}>
            {card.inStock === true ? "Available" : ""}
          </h3>
          <div className={style.information_product__innerTags}>
            {card.tags.map((tag) => (
              <h3 className={style.information_product__tag}>{`${tag},`}</h3>
            ))}
          </div>
        </div>
      </div>
      <div className={style.information_product__wrapVideo}>
        <iframe
          className={style.information_product__video}
          src="https://www.youtube.com/embed/ScP-j6hELzY?si=WGRMnj3uLoE_6e7F"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <div className={style.information_product__wrapFeatures}>
          <div className={style.information_product__featureShop}>
            <IconDiscount className={style.information_product__iconDiscount} />
            <div className={style.information_product__innerDiscountText}>
              <h3 className={style.information_product__discountTitle}>
                64% Discount
              </h3>
              <h2 className={style.information_product__discountText}>
                Save your 64% money with us
              </h2>
            </div>
          </div>
          <div className={style.information_product__featureShop}>
            <IconLeaf className={style.information_product__iconLeaf} />
            <div className={style.information_product__innerDiscountText}>
              <h3 className={style.information_product__discountTitle}>
                100% Organic
              </h3>
              <h2 className={style.information_product__discountText}>
                100% Organic Vegetables
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
