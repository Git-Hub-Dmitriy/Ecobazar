import * as style from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@pages/Layout/Header/Header";
import Footer from "@pages/Layout/Footer/Footer";
import { products } from "@data/products";
import Modal from "@components/Modal/Modal";
import ReviewProduct from "@components/ReviewProduct/ReviewProduct";
import BtnScrollUp from "@components/Buttons/BtnScrollUp/BtnScrollUp";
import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeModalReview } from "@store/reducers/activeModalSlice";

export const blogFiltersContext = createContext();
export const setBlogFiltersContext = createContext();
export const shopFiltersContext = createContext();
export const setShopFiltersContext = createContext();

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  const productId = useSelector((store) => store.activeModal.productId);
  const modalReview = useSelector((store) => store.activeModal.modalReview);
  const [blogFilters, setBlogFilters] = useSearchParams();
  const [shopFilters, setShopFilters] = useSearchParams();
  const product = products?.find((item) => item.id === productId);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ecobazar</title>
      </Helmet>
      <blogFiltersContext.Provider value={blogFilters}>
        <setBlogFiltersContext.Provider value={setBlogFilters}>
          <shopFiltersContext.Provider value={shopFilters}>
            <setShopFiltersContext.Provider value={setShopFilters}>
              <BtnScrollUp />
              <Header showMenu={showMenu} setShowMenu={setShowMenu} />
              {showMenu !== true ? (
                <>
                  <Outlet />
                  <Modal
                    activeModal={modalReview}
                    changeModal={changeModalReview}
                  >
                    <ReviewProduct product={product} />
                  </Modal>
                  <Footer />
                </>
              ) : (
                false
              )}
            </setShopFiltersContext.Provider>
          </shopFiltersContext.Provider>
        </setBlogFiltersContext.Provider>
      </blogFiltersContext.Provider>
    </>
  );
}
