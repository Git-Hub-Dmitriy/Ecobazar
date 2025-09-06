import * as style from "./Login.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import IconPasswordEye from "@assets/iconPasswordEye.svg";
import { useRef, useState, useEffect } from "react";

export default function Login() {
  const btnRef = useRef();
  const passRef = useRef();
  const [switchType, setSwitchType] = useState(false);

  useEffect(() => {
    const type =
      passRef.current.getAttribute("type") === "password" ? "text" : "password";
    passRef.current.setAttribute("type", type);
  }, [switchType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.login}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <Navigate one={"Account"} two={"Login"} />
      <section className={style.login__wrap}>
        <h1 className={style.login__title}>Sign In</h1>
        <form
          name="login"
          method="post"
          action=""
          className={style.login__form}
        >
          <input
            name="email"
            id="email"
            autoComplete="on"
            placeholder="Email"
            className={style.login__email}
            type="email"
          />
          <div className={style.login__innerPassword}>
            <input
              ref={passRef}
              name="password"
              id="password"
              placeholder="Password"
              className={style.login__password}
              type="password"
            />
            <IconPasswordEye
              ref={btnRef}
              onClick={() => setSwitchType(!switchType)}
              className={
                switchType === false
                  ? style.login__switchPassword
                  : `${style.login__switchPassword} ${style.login__switchPassword_show}`
              }
            />
          </div>
          <div className={style.login__wrapRememberBtn}>
            <label className={style.login__innerCheckbox}>
              <input
                name="login"
                className={style.login__check}
                type="checkbox"
              />
              Remember me
            </label>
            <span className={style.login__forgot}>Forget Password</span>
          </div>
          <button className={style.login__btn}>Login</button>
        </form>
        <div className={style.login__innerRegister}>
          <h4 className={style.login__subtitle}>Don't have account?</h4>
          <Link className={style.login__link} to={"/register"}>
            Register
          </Link>
        </div>
      </section>
    </main>
  );
}
