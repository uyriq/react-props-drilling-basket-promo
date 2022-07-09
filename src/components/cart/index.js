import React from "react";
import { Tabs } from "./tabs";
import { ProductsContainer } from "./products-container";

export const Cart = ({ totalPrice, setTotalPrice, setDiscount, discount }) => {
  return (
    <section>
      <Tabs />
      <ProductsContainer
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        discount={discount}
        setDiscount={setDiscount}
      />
    </section>
  );
};
