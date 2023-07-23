import React from "react";
import { Quantity } from "../Quantity";

export const CartItem = ({product}) => {

  return (
    <div className="cart-item">
      <input type="checkbox" name="cart-item" id="cart-item" />
      <div className="cart-image">
        <img src={product.imgUrl} alt="cart-item" height={100} width={100}/>
      </div>
      <div className="item-name">
        <h2>{product.itemName}</h2>
      </div>
      <div className="item-color">
        <h4>{product.color}</h4>
      </div>
      {/* <div className="item-quantity"> */}
       <Quantity />
      {/* </div> */}
      <div className="item-amount">
        {product.price}
      </div>
    </div>
  );
};
