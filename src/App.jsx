import "./App.module.scss";
import Layout from "@pages/Layout/Layout";
import About from "@pages/About/About";
import Shop from "@pages/Shop/Shop";
import Contact from "@pages/Contact/Contact";
import Blog from "@pages/Blog/Blog";
import Account from "@pages/Account/Account";
import Faqs from "@pages/Faqs/Faqs";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import Home from "@pages/Home/Home";
import Product from "@pages/Product/Product";
import Descriptions from "@pages/Product/Descriptions/Descriptions";
import InformationProduct from "@pages/Product/InformationProduct/InformationProduct";
import Feedback from "@pages/Product/Feedback/Feedback";
import SinglePost from "@pages/SinglePost/SinglePost";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import Dashboard from "@pages/Account/Dashboard/Dashboard";
import OrderHistory from "@pages/Account/OrderHistory/OrderHistory";
import Settings from "@pages/Account/Settings/Settings";
import Shopping from "@pages/Account/Shopping/Shopping";
import AccountWishlist from "@pages/Account/AccountWishlist/AccountWishlist";
import Wishlist from "@pages/Wishlist/Wishlist";
import ShoppingCart from "@pages/ShoppingCart/ShoppingCart";
import SingleOrder from "@pages/Account/SingleOrder/SingleOrder";
import Checkout from "@pages/Checkout/Checkout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { filterPopularProducts } from "@utils/filterPopularProducts";
import { filterHotDeals } from "@utils/filterHotDeals";
import { products } from "@data/products";
import { hotDeals } from "@data/hotDeals";
import { popularProducts } from "@data/popularProducts";

const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id/*" element={<Product />}>
        <Route path="description" element={<Descriptions />} />
        <Route path="information" element={<InformationProduct />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<SinglePost />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="account/*" element={<Account />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orderHistory" element={<OrderHistory />} />
        <Route path="orderHistory/:id" element={<SingleOrder />} />
        <Route path="accountWishlist" element={<AccountWishlist />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="faqs" element={<Faqs />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="shoppingCart" element={<ShoppingCart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

filterPopularProducts(products, popularProducts);
filterHotDeals(products, hotDeals);

export default function App() {
  return (
    <>
      <RouterProvider router={rout} />
    </>
  );
}
