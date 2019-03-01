import { cn } from "@bem-react/classname";
import React from "react";
import "./ProductText.css";

const cnProductText = cn("ProductText");

const ProductText = ({ selectedHover, text }) => {
  if (selectedHover) {
    return <p className={cnProductText({ pink: true })}>Котэ не одобряет?</p>;
  } else {
    return <p className={cnProductText()}>{text}</p>;
  }
};

export default ProductText;
