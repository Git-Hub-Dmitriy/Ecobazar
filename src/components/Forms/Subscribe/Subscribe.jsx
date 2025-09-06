import * as style from "./Subscribe.module.scss";

export default function Subscribe() {
  return (
    <div className={style.subscribe}>
      <form
        method="post"
        name="subscription"
        className={style.subscribe__form}
        action="/"
      >
        <input
          required
          id="subsribeForm"
          autoComplete="on"
          autoSave="on"
          placeholder="Your email address"
          className={style.subscribe__input}
          type="email"
        />
        <button className={style.subscribe__button}>Subscribe</button>
      </form>
    </div>
  );
}
