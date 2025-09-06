import * as style from "./BlockCheckbox.module.scss";
import React from "react";
export default class BlockCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <div className={style.blockCheckbox}>
        <input
          onChange={() =>
            this.props.setStatesCheckout({
              ...this.props.statesCheckout,
              addressCheckbox: !this.props.statesCheckout.addressCheckbox,
            })
          }
          checked={this.props.statesCheckout.addressCheckbox}
          name="checkoutAddressCheckbox"
          value={"differentAddress"}
          type="checkbox"
          className={style.blockCheckbox__input}
        />
        <p className={style.blockCheckbox__text}>Ship to a different address</p>
      </div>
    );
  }
}
