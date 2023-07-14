import React, { useState } from "react";
import bgimage from "../assets/image-product-1.jpg";
import bgimagetwo from "../assets/image-product-2.jpg";
import bgimagethree from "../assets/image-product-3.jpg";
import bgimagefour from "../assets/image-product-4.jpg";
import imgproductone from "../assets/image-product-1-thumbnail.jpg";
import imgproducttwo from "../assets/image-product-2-thumbnail.jpg";
import imgproductthree from "../assets/image-product-3-thumbnail.jpg";
import imgproductfour from "../assets/image-product-4-thumbnail.jpg";

export const Collection = () => {
  const [mainImage, setMainImage] = useState(bgimage);
  const handleImageChange = (newImage) => {
    setMainImage(newImage);
  };

  return (
    <div className="content">
      <div className="left">
        <div className="bgimage">
          <img src={mainImage} alt="mainImage" />
        </div>
        <div className="bgimage2">
          <div className="img1">
            <img
              src={imgproductone}
              onClick={() => handleImageChange(bgimage)}
            />
          </div>
          <div className="img1">
            <img
              src={imgproducttwo}
              onClick={() => handleImageChange(bgimagetwo)}
            />
          </div>
          <div className="img1">
            <img
              src={imgproductthree}
              onClick={() => handleImageChange(bgimagethree)}
            />
          </div>
          <div className="img1">
            <img
              src={imgproductfour}
              onClick={() => handleImageChange(bgimagefour)}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
        </div>

        <div className="p">
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>

        <div className="dollar">
          <div className="dl1">
            <h2>$125.00</h2>
            <span>50%</span>
          </div>

          <div className="dollar2">
            <span>$250.00</span>
          </div>
        </div>

        <div className="add-to-cart">
          <div className="button-one">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="hsl(26, 100%, 55%)"
              class="bi bi-dash-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                stroke="hsl(26, 100%, 55%)"
                stroke-width="2"
              />
            </svg>

            <h2>0</h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                stroke="hsl(26, 100%, 55%)"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="button-two">
            <button>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="hsl(0, 0%, 100%)"
                  fill-rule="nonzero"
                />
              </svg>

              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
