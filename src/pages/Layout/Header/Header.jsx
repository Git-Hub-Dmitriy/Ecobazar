import * as style from "./Header.module.scss";
import SectionSearch from "./SectionSearch/SectionSearch";
import SectionCurrency from "./SectionCurrency/SectionCurrency";
import SectionLinks from "./SectionLinks/SectionLinks";

export default function Header() {
  return (
    <header className={style.header}>
      <SectionCurrency />
      <SectionSearch />
      <SectionLinks />
    </header>
  );
}
