import React from "react";
import * as style from "./BlockCountry.module.scss";
import IconArrowDown from "@assets/iconArrowDown.svg";

export default class BlockCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      cities: [],
      visibleCountries: false,
      visibleCities: false,
      empty: false,
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const response = fetch(
      "https://countriesnow.space/api/v0.1/countries/states"
    )
      .then((json) => json.json())
      .then((json) =>
        this.setState({
          ...this.state,
          countries: json.data,
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.statesCheckout.selectedCountry !==
      this.props.statesCheckout.selectedCountry
    ) {
      const response = fetch(
        "https://countriesnow.space/api/v0.1/countries/states"
      )
        .then((json) => json.json())
        .then((respond) => {
          const cities = respond?.data.find(
            (country) =>
              country.name === this.props.statesCheckout.selectedCountry
          );
          if (cities?.states.length === 0) {
            this.props.setStatesCheckout({
              ...this.statesCheckout,
              selectedCity: "Not Found",
            });
            this.setState({
              ...this.state,
              cities: [],
            });
          } else {
            this.props.setStatesCheckout({
              ...this.statesCheckout,
              selectedCity: "Selects",
            });
            this.setState({
              ...this.state,
              cities: cities.states,
            });
          }
        })
        .catch((err) => console.log(err.message));
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className={style.blockCountry}>
        <div className={style.blockCountry__wrapList}>
          <h3 className={style.blockCountry__title}>Country / Region</h3>
          <div
            onBlur={() =>
              this.setState({ ...this.state, visibleCountries: false })
            }
            onClick={() =>
              this.setState({
                ...this.state,
                visibleCountries: !this.state.visibleCountries,
              })
            }
            tabIndex={0}
            className={style.blockCountry__innerList}
          >
            <li className={style.blockCountry__selected}>
              {this.props.statesCheckout.selectedCountry}
            </li>
            <IconArrowDown className={style.blockCountry__iconArrow} />
            <ul
              className={
                this.state.visibleCountries !== true
                  ? style.blockCountry__list
                  : `${style.blockCountry__list} ${style.blockCountry__list_visible}`
              }
            >
              {this.state?.countries.map((country, i) => (
                <li
                  onClick={() =>
                    this.props.setStatesCheckout({
                      ...this.props.statesCheckout,
                      selectedCountry: country.name,
                    })
                  }
                  className={style.blockCountry__item}
                  key={i}
                >
                  {country.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.blockCountry__wrapList}>
          <h3 className={style.blockCountry__title}>States</h3>
          <div
            onBlur={() =>
              this.setState({ ...this.state, visibleCities: false })
            }
            onClick={() => {
              this.setState({
                ...this.state,
                visibleCities: !this.state.visibleCities,
              });
              if (this.state.cities.length === 0) {
                this.setState({
                  ...this.state,
                  empty: true,
                });
              }
            }}
            tabIndex={1}
            className={style.blockCountry__innerList}
          >
            <li className={style.blockCountry__selected}>
              {this.props.statesCheckout.selectedCity}
            </li>
            <IconArrowDown className={style.blockCountry__iconArrow} />
            <ul
              className={
                this.state.visibleCities !== true
                  ? style.blockCountry__list
                  : `${style.blockCountry__list} ${style.blockCountry__list_visible}`
              }
            >
              {this.state?.cities.map((city, i) => {
                return (
                  <li
                    onClick={() =>
                      this.props.setStatesCheckout({
                        ...this.props.statesCheckout,
                        selectedCity: city.name,
                      })
                    }
                    className={style.blockCountry__item}
                    key={i}
                  >
                    {city.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={style.blockCountry__innerInput}>
          <h3 className={style.blockCountry__title}>ZipCode</h3>
          <input
            onChange={(e) =>
              this.props.setStatesCheckout({
                ...this.props.statesCheckout,
                zipCode: e.target.value,
              })
            }
            placeholder="Zip Code"
            className={style.blockCountry__input}
            name="checkoutZipCode"
            type="text"
            value={this.props.statesCheckout.zipCode}
          />
        </div>
      </div>
    );
  }
}
