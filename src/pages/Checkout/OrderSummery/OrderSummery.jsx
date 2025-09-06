import React from "react";
import * as style from "./OrderSummery.module.scss";
import SectionPayment from "./SectionPayment/SectionPayment";

export default class OrderSummery extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <section className={style.orderSummery}>
        <h1 className={style.orderSummery__title}>Order Summery</h1>
        <div className={style.orderSummery__wrapTotal}>
          <div className={style.orderSummery__wrapSubtitle}>
            <h3 className={style.orderSummery__subtitle}>Subtotal:</h3>
            <h3 className={style.orderSummery__subtitle_bold}></h3>
          </div>
          <div className={style.orderSummery__wrapSubtitle}>
            <h3 className={style.orderSummery__subtitle}>Shipping:</h3>
            <h3 className={style.orderSummery__subtitle_bold}></h3>
          </div>
          <div className={style.orderSummery__wrapSubtitle}>
            <h3 className={style.orderSummery__subtitle}>Total:</h3>
            <h3 className={style.orderSummery__subtitle_bold}></h3>
          </div>
        </div>
        <SectionPayment
          submit={this.props.submit}
          setStatesCheckout={this.props.setStatesCheckout}
          statesCheckout={this.props.statesCheckout}
        />
      </section>
    );
  }
}
