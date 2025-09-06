import * as style from "./PagesLinks.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {
  setBlogFiltersContext,
  setShopFiltersContext,
} from "@pages/Layout/Layout";
import { useDispatch } from "react-redux";
import { resetProduct } from "@store/reducers/amountProductSlice";
import { statesShopReset } from "@store/reducers/statesShopSlice";
import { resetBlogStates } from "@store/reducers/statesBlogSlice";

export default function PagesLinks() {
  const dispatch = useDispatch();
  const resetBlogFilters = useContext(setBlogFiltersContext);
  const resetFiltersShop = useContext(setShopFiltersContext);

  const activeLink = ({ isActive }) =>
    isActive ? style.active : style.notActive;

  return (
    <>
      <ul className={style.links}>
        <li>
          <NavLink
            onClick={() => {
              dispatch(resetProduct(1));
              dispatch(statesShopReset({}));
              dispatch(resetBlogStates({}));
            }}
            className={activeLink}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              dispatch(resetProduct(1));
              resetFiltersShop({});
              dispatch(statesShopReset({}));
              dispatch(resetBlogStates({}));
            }}
            className={activeLink}
            to="shop"
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              dispatch(resetProduct(1));
              dispatch(resetBlogStates({}));
              dispatch(statesShopReset({}));
              resetBlogFilters({});
            }}
            className={activeLink}
            to="blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              dispatch(resetProduct(1));
              dispatch(statesShopReset({}));
              dispatch(resetBlogStates({}));
            }}
            className={activeLink}
            to="about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              dispatch(resetProduct(1));
              dispatch(statesShopReset({}));
              dispatch(resetBlogStates({}));
            }}
            className={activeLink}
            to="contact"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </>
  );
}
