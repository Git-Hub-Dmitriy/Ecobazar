import * as style from "./AccountWishlist.module.scss";
import { Helmet } from "react-helmet";

export default function AccountWishlist() {
  return (
    <main className={style.accountWishlist}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
    </main>
  );
}
