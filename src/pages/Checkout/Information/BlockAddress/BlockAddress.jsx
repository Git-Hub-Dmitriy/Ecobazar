import React from "react";
import * as style from "./BlockAddress.module.scss";

export default class BlockAddress extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <div className={style.blockAddress}>
        <h3 className={style.blockAddress__title}>Street Address</h3>
        <input
          required
          onChange={(e) =>
            this.props.setStatesCheckout({
              ...this.props.statesCheckout,
              address: e.target.value,
            })
          }
          value={this.props.statesCheckout.address}
          placeholder="Address"
          className={style.blockAddress__input}
          name="checkoutAddress"
          type="text"
        />
      </div>
    );
  }
}
