import * as style from "./PostGallery.module.scss";

export default function PostGallery() {
  return (
    <section className={style.postGallery}>
      <h2 className={style.postGallery__title}>Our Gallery</h2>
      <div className={style.postGallery__wrapImg}>
        {images.map((img, i) => (
          <img
            className={style.postGallery__img}
            key={i}
            src={img}
            alt="image gallery"
          />
        ))}
      </div>
    </section>
  );
}

export const images = [
  "/images/gallery-one.png",
  "/images/gallery-two.png",
  "/images/gallery-three.png",
  "/images/gallery-four.png",
  "/images/gallery-five.png",
  "/images/gallery-six.png",
  "/images/gallery-seven.png",
  "/images/gallery-eight.png",
];
