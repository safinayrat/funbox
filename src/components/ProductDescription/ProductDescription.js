import { cn } from "@bem-react/classname";
import React from "react";
import "./ProductDescription.css";

const cnProductDescription = cn("ProductDescription");

const ProductDescription = ({
  desciptionDisabled,
  desciptionSelected,
  disabled,
  selected,
  onClick
}) => {
  if (disabled) {
    return <p className={cnProductDescription()}>{desciptionDisabled}</p>;
  } else if (selected) {
    return <p className={cnProductDescription()}>{desciptionSelected}</p>;
  } else {
    return (
      <p className={cnProductDescription()}>
        <span>Чего сидишь? Порадуй котэ,&nbsp;</span>
        <button className={cnProductDescription("Button")} onClick={onClick}>
          купи.
        </button>
      </p>
    );
  }
};

export default ProductDescription;
