import React from "react";
import { compose } from "@bem-react/core";
import "./Product.css";
import { cn } from "@bem-react/classname";
import { DisabledTheme } from "./_theme/disabled";
import { SelectedTheme } from "./_theme/selected";
import { HoverTheme } from "./_theme/hover";
import { SelectedHoverTheme } from "./_theme/selectedHover";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductText from "../ProductText/ProductText";
export const cnProduct = cn("Product");

class product extends React.Component {
  state = {
    selected: false,
    hover: false,
    selectedHover: false
  };

  onProductClick = () => {
    if (!this.props.disabled) {
      this.setState(({ selected, selectedHover, hover }) => {
        return { selected: !selected, selectedHover: false, hover: false };
      });
    }
  };

  onProductHover = () => {
    if (!this.props.disabled) {
      this.setState(({ hover }) => {
        return { hover: true };
      });
      if (this.state.selected) {
        this.setState({ selectedHover: true, hover: false });
      }
    }
  };

  onProductLeave = () => {
    if (!this.props.disabled) {
      this.setState(({ hover, selectedHover }) => {
        return { hover: false, selectedHover: false };
      });
    }
  };

  render() {
    const {
      text,
      title,
      subtitle,
      amountOfPortions,
      portions,
      amountOfGiftMouse,
      customerSatisfaction,
      giftMouseDesc,
      image,
      weight,
      desciptionDisabled,
      desciptionSelected,
      disabled
    } = this.props;
    const { selected, hover, selectedHover } = this.state;

    return (
      <li className={cnProduct()}>
        <div
          className={cnProduct("Wrapper", {
            disabled,
            selected,
            hover,
            selectedHover
          })}
          onClick={this.onProductClick}
          onMouseEnter={this.onProductHover}
          onMouseLeave={this.onProductLeave}
        >
          <ProductText
            selected={selected}
            selectedHover={selectedHover}
            text={text}
          />
          <h2 className={cnProduct("Title", { disabled })}>{title}</h2>
          <h3 className={cnProduct("Subtitle", { disabled })}>{subtitle}</h3>
          <ul className={cnProduct("Benefit-list")}>
            <li className={cnProduct("Benefit-item")}>
              <b>{amountOfPortions}</b>&nbsp;{portions}
            </li>
            <li className={cnProduct("Benefit-item")}>
              <b>{amountOfGiftMouse}</b>&nbsp;{giftMouseDesc}
            </li>
            <li className={cnProduct("Benefit-item")}>
              {customerSatisfaction}
            </li>
          </ul>
          <img
            className={cnProduct("Image")}
            width="315"
            height="273"
            src={image}
            alt={title}
          />
          <p
            className={cnProduct("Weight", {
              disabled,
              selected,
              hover,
              selectedHover
            })}
          >
            <br />
            {weight}
            <br />
            <span className={cnProduct("Weight-kg")}>кг</span>
          </p>
        </div>
        <ProductDescription
          desciptionDisabled={desciptionDisabled}
          desciptionSelected={desciptionSelected}
          disabled={disabled}
          selected={selected}
          onClick={this.onProductClick}
        />
      </li>
    );
  }
}

const Product = compose(
  DisabledTheme,
  SelectedTheme,
  HoverTheme,
  SelectedHoverTheme
)(product);

export default Product;
