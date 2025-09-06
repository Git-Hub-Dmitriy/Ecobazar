import React from "react";
import * as style from "./BlockName.module.scss";

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <div className={style.blockName}>
        <div className={style.blockName__innerInput}>
          <h3 className={style.blockName__title}>First name</h3>
          <input
            required
            onChange={(e) =>
              this.props.setStatesCheckout({
                ...this.props.statesCheckout,
                name: e.target.value,
              })
            }
            value={this.props.statesCheckout.name}
            placeholder="Your first name"
            className={style.blockName__input}
            name="checkoutName"
            type="text"
          />
        </div>
        <div className={style.blockName__innerInput}>
          <h3 className={style.blockName__title}>Last name</h3>
          <input
            required
            onChange={(e) =>
              this.props.setStatesCheckout({
                ...this.props.statesCheckout,
                surname: e.target.value,
              })
            }
            value={this.props.statesCheckout.surname}
            placeholder="Your last name"
            className={style.blockName__input}
            name="checkoutSurname"
            type="text"
          />
        </div>
        <div className={style.blockName__innerInput}>
          <h3
            className={`${style.blockName__title} ${style.blockName__title_wrapSpan}`}
          >
            Company Name{" "}
            <span className={style.blockName__textSpan}>(optional)</span>
          </h3>
          <input
            required
            onChange={(e) =>
              this.props.setStatesCheckout({
                ...this.props.statesCheckout,
                companyName: e.target.value,
              })
            }
            value={this.props.statesCheckout.companyName}
            placeholder="Company name"
            className={style.blockName__input}
            name="checkoutCompanyName"
            type="text"
          />
        </div>
      </div>
    );
  }
}
