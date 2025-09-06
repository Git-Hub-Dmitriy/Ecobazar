import * as style from "./HelpsSection.module.scss";
import { NavLink } from "react-router-dom";

export default function HelpsSection({ active }) {
  return (
    <>
      <div className={style.information__helpsSection}>
        <h1>Helps</h1>
        <NavLink className={active} to="contact">
          Contact
        </NavLink>
        <NavLink className={active} to="faqs">
          Faqs
        </NavLink>
        <NavLink className={active} to="terms">
          Terms & Condition
        </NavLink>
        <NavLink className={active} to="privacyPolicy">
          Privacy Policy
        </NavLink>
      </div>
    </>
  );
}
