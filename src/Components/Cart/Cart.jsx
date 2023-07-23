import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { products } from "../Products";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const [prices, setPrice] = useState([]);

  return (
    <div className="cart-page">
      <div>
        {!products[0] && <p>No Products in the cart</p>}
        {products[0] && <h5>Products</h5>}
        {products
          .filter((product) => product.inCart === true)
          .map((product) => (
            <CartItem product={product} />
          ))}
      </div>
      <div>
        <button>CHECKOUT</button>
        <h1>{total}</h1>
      </div>
    </div>
  );
};
