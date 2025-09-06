import React from "react";
import * as style from "./Information.module.scss";
import BlockName from "./BlockName/BlockName";
import BlockCountry from "./BlockCountry/BlockCountry";
import BlockEmail from "./BlockEmail/BlockEmail";
import BlockAddress from "./BlockAddress/BlockAddress";
import BlockCheckbox from "./BlockCheckbox/BlockCheckbox";
import OrderNote from "./OrderNote/OrderNote";

export default class Information extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <section className={style.information}>
        <h1 className={style.information__title}>Billing Information</h1>
        <form className={style.information__form} id="checkoutData">
          <BlockName
            statesCheckout={this.props.statesCheckout}
            setStatesCheckout={this.props.setStatesCheckout}
          />
          <BlockAddress
            statesCheckout={this.props.statesCheckout}
            setStatesCheckout={this.props.setStatesCheckout}
          />
          <BlockCountry
            statesCheckout={this.props.statesCheckout}
            setStatesCheckout={this.props.setStatesCheckout}
          />
          <BlockEmail
            statesCheckout={this.props.statesCheckout}
            setStatesCheckout={this.props.setStatesCheckout}
          />
          <BlockCheckbox
            statesCheckout={this.props.statesCheckout}
            setStatesCheckout={this.props.setStatesCheckout}
          />
          <OrderNote
            statesCheckout={this.props.statesCheckout}
            setStatesCheckout={this.props.setStatesCheckout}
          />
        </form>
      </section>
    );
  }
}
