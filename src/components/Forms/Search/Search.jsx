import * as style from "./Search.module.scss";
import IconSearch from "@assets/iconSearch.svg";

export default function Search() {
  return (
    <div className={style.search}>
      <form className={style.search__form} name="search" action="">
        <div className={style.search__iconBox}>
          <IconSearch stroke="black" className={style.search__icon} />
        </div>
        <input
          id="formSearch"
          autoSave="on"
          autoComplete="on"
          placeholder="Search"
          className={style.search__input}
          type="text"
        />
        <button className={style.search__button}>Search</button>
      </form>
    </div>
  );
}
