import React from "react";
import * as style from "./BlockEmail.module.scss";

export default class BlockEmail extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <div className={style.blockEmail}>
        <div className={style.blockEmail__wrapInput}>
          <h3 className={style.blockEmail__title}>Email</h3>
          <input
            required
            placeholder="Email Address"
            onChange={(e) =>
              this.props.setStatesCheckout({
                ...this.statesCheckout,
                email: e.target.value,
              })
            }
            value={this.props.statesCheckout.email}
            className={style.blockEmail__input}
            name="checkoutEmail"
            type="email"
          />
        </div>
        <div className={style.blockEmail__wrapInput}>
          <h3 className={style.blockEmail__title}>Phone</h3>
          <input
            required
            placeholder="Phone number"
            onChange={(e) =>
              this.props.setStatesCheckout({
                ...this.statesCheckout,
                phone: e.target.value,
              })
            }
            value={this.props.statesCheckout.phone}
            className={style.blockEmail__input}
            name="checkoutEmail"
            type="tel"
          />
        </div>
      </div>
    );
  }
}
