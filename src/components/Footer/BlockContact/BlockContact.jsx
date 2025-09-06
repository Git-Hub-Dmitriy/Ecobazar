import * as style from "./BlockContact.module.scss";
import Logo from "@components/Logo/Logo";

export default function BlockContact() {
  return (
    <div className={style.footerContact}>
      <Logo colorText="#ffffff" />
      <h2 className={style.footerContact__title}>
        Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
        eget bibendum magna congue nec.
      </h2>
      <div className={style.footerContact__content}>
        <a href="tel:2195550114" className={style.footerContact__tel}>
          (219) 555-0114
        </a>
        <p>or</p>
        <a href="mailto:proxy@gmail.com" className={style.footerContact__mail}>
          Proxy@gmail.com
        </a>
      </div>
    </div>
  );
}
