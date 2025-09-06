import * as style from "./Shopping.module.scss";
import { Helmet } from "react-helmet";

export default function Shopping() {
  return (
    <main className={style.shopping}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopping Cart</title>
      </Helmet>
    </main>
  );
}
