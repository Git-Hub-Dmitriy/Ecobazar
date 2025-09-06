import * as style from "./BlogGallery.module.scss";

export default function BlogGallery() {
  return (
    <section className={style.blogGallery}>
      <h2 className={style.blogGallery__title}>Our Gallery</h2>
      <div className={style.blogGallery__wrapImg}>
        {images.map((img, i) => (
          <img
            className={style.blogGallery__img}
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
