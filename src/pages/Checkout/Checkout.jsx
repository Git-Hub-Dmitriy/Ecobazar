import React from "react";
import * as style from "./Checkout.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { Helmet } from "react-helmet";
import Information from "./Information/Information";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import OrderSummery from "./OrderSummery/OrderSummery";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "Select",
      selectedCity: "Selects",
      zipCode: "",
      name: "",
      surname: "",
      companyName: "",
      address: "",
      email: "",
      phone: "",
      orderNote: "",
      addressCheckbox: false,
      methodPayment: "cashDelivery",
    };
    this.setState = this.setState.bind(this);
  }

  async submitDataUser() {
    try {
      const submit = await fetch("", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "DataUserOrder",
          data: this.state,
        }),
      });
      const response = await submit.json();
    } catch (err) {
      console.log(err.status);
      console.log(err.message);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className={style.checkout}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checkout</title>
        </Helmet>
        <Navigate one={"Shopping Cart"} two={"Checkout"} />
        <div className={style.checkout__wrapper}>
          <div className={style.checkout__wrappContent}>
            <Information
              setStatesCheckout={this.setState}
              statesCheckout={this.state}
            />
            <ExtraInfo />
          </div>
          <OrderSummery
            submit={this.submitDataUser}
            setStatesCheckout={this.setState}
            statesCheckout={this.state}
          />
        </div>
      </main>
    );
  }
}
