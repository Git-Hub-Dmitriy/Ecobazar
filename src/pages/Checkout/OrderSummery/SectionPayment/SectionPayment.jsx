import * as style from "./SectionPayment.module.scss";
import React from "react";

export default class SectionPayment extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <div className={style.sectionPayment}>
        <div className={style.sectionPayment__wrapPay}>
          <h2 className={style.sectionPayment__title}>Payment Method</h2>
          <div className={style.sectionPayment__wrapCheckbox}>
            <div className={style.sectionPayment__innerCheckbox}>
              <input
                defaultChecked
                onChange={(e) =>
                  this.props.setStatesCheckout({
                    ...this.props.statesCheckout,
                    methodPayment: e.target.value,
                  })
                }
                name="PaymentMethod"
                value={"cashDelivery"}
                className={style.sectionPayment__radio}
                type="radio"
              />
              <h4 className={style.sectionPayment__subtitle}>
                Cash on Delivery
              </h4>
            </div>
            <div className={style.sectionPayment__innerCheckbox}>
              <input
                onChange={(e) =>
                  this.props.setStatesCheckout({
                    ...this.props.statesCheckout,
                    methodPayment: e.target.value,
                  })
                }
                name="PaymentMethod"
                value={"paypal"}
                className={style.sectionPayment__radio}
                type="radio"
              />
              <h4 className={style.sectionPayment__subtitle}>Paypal</h4>
            </div>
            <div className={style.sectionPayment__innerCheckbox}>
              <input
                onChange={(e) =>
                  this.props.setStatesCheckout({
                    ...this.props.statesCheckout,
                    methodPayment: e.target.value,
                  })
                }
                name="PaymentMethod"
                value={"amazonPay"}
                className={style.sectionPayment__radio}
                type="radio"
              />
              <h4 className={style.sectionPayment__subtitle}>Amazon Pay</h4>
            </div>
          </div>
        </div>
        <button
          onClick={() => this.props.submit()}
          form="checkoutData"
          className={style.sectionPayment__btnOrder}
        >
          Place Order
        </button>
      </div>
    );
  }
}
