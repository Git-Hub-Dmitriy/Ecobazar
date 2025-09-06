import * as style from "./Register.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import IconEye from "@assets/iconPasswordEye.svg";
import { useState, useEffect, useRef } from "react";

export default function Register() {
  const refPassword = useRef();
  const refConfirmPassword = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showPassword) {
      refPassword.current.setAttribute("type", "text");
    } else {
      refPassword.current.setAttribute("type", "password");
    }
    if (showConfirmPassword) {
      refConfirmPassword.current.setAttribute("type", "text");
    } else {
      refConfirmPassword.current.setAttribute("type", "password");
    }
  }, [showPassword, showConfirmPassword]);
  return (
    <main className={style.register}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <Navigate one={"Account"} two={"Create Account"} />
      <div className={style.register__container}>
        <h1 className={style.register__title}>Create Account</h1>
        <form
          name="register"
          action=""
          method="post"
          className={style.register__form}
        >
          <div className={style.register__wrapInputs}>
            <input
              className={style.register__input}
              name="email"
              type="email"
              placeholder="Email"
            />
            <div className={style.register__innerInput}>
              <input
                ref={refPassword}
                placeholder="Password"
                className={style.register__input}
                name="password"
                type="password"
              />
              <IconEye
                onClick={() => setShowPassword(!showPassword)}
                stroke={showPassword === false ? "#1a1a1a" : "#00B207"}
                className={style.register__iconEye}
              />
            </div>
            <div className={style.register__innerInput}>
              <input
                ref={refConfirmPassword}
                placeholder="Confirm Password"
                className={style.register__input}
                name="confirmPassword"
                type="password"
              />
              <IconEye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                stroke={showConfirmPassword === false ? "#1a1a1a" : "#00B207"}
                className={style.register__iconEye}
              />
            </div>
            <label className={style.register__innerCheckbox}>
              <input
                className={style.register__checkbox}
                name="register"
                type="checkbox"
              />
              Accept all terms & Conditions
            </label>
          </div>
          <button className={style.register__button}>Create Account</button>
        </form>
        <div className={style.register__innerLink}>
          <span className={style.register__subtitle}>Already have account</span>
          <Link to={"/login"} className={style.register__link}>
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
