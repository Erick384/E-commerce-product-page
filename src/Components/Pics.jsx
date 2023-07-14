import React from "react";
import imgproductone from "../assets/image-product-1-thumbnail.jpg";
import imgproducttwo from "../assets/image-product-2-thumbnail.jpg";
import imgproductthree from "../assets/image-product-3-thumbnail.jpg";
import imgproductfour from "../assets/image-product-4-thumbnail.jpg";

export const Pics = () => {
  return (
    <div className="bgimage2">
      <div className="img1">
        <img src={imgproductone} />
      </div>
      <div className="img1">
        <img src={imgproducttwo} />
      </div>
      <div className="img1">
        <img src={imgproductthree} />
      </div>
      <div className="img1">
        <img src={imgproductfour} />
      </div>
    </div>
  );
};
