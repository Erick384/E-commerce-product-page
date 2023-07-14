import React from 'react'
import bgimage from "../assets/image-product-1.jpg";
import { Pics } from "./Pics";

const Collections = () => {
  return (
    <div className="content">
        <div className="left">
          <div className="bgimage">
            <img src={bgimage} alt="bgimage" height="300" width="300" />
          </div>
          <Pics />
        </div>
        <div className="right">
          <div className="heading">
            <h3>Sneaker Company</h3>
            <h1>Fall Limited Edition Sneakers</h1>
          </div>

          <div className="p">
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
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
              <div className="icon">
                <svg
                  width="12"
                  height="4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
                </svg>
              </div>
              <input type="text" />
              <div className="icon">
                <svg
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b"
                    />
                  </defs>
                  <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Collections