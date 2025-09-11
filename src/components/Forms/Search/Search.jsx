import * as style from "./Search.module.scss";
import IconSearch from "@assets/iconSearch.svg";

export default function Search() {
  return (
    <div className={style.search}>
      <form name="search" className={style.search__form}>
        <div className={style.search__innerIcon}>
          <IconSearch stroke="#1a1a1a" className={style.search__icon} />
        </div>
        <input
          id="formSearch"
          autoSave="on"
          autoComplete="on"
          placeholder="Search"
          className={style.search__input}
          type="text"
        />
      </form>
      <button className={style.search__button}>Search</button>
    </div>
  );
}
