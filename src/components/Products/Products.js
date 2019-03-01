import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ data }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return <Product key={id} {...itemProps} />;
  });
  return <ul className="Products">{elements}</ul>;
};

export default Products;
