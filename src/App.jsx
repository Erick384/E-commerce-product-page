import './App.css'
import { Footer } from './Components/Footer'
import { NavBar } from './Components/NavBar'
import React, {useState} from 'react'
import {bgImage} from "./assets/image-product-1-thumbnail.jpg"
import { Pics } from './Components/Pics'

export default function App() {
  const [pic, SetPic] = useState()

  return (
<div className="container">
    <NavBar />

      <div className="con2">
        <div className="left">
          <div className="bgimage">
            <img src={bgImage} alt="" height="600" width="100"/>
          </div>
          <Pics />
        </div>

        <div className="right">
          <div className="heading">
            <h3 style="color: hsl(26, 100%, 55%)">Sneaker Company</h3>
            <h1>Fall Limited Edition Sneakers</h1>
          </div>
          <div className="p">
            <p style="color: hsl(219, 9%, 45%)">
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
              <span style="text-decoration: line-through; color: hsl(219, 9%, 45%)">$250.00</span>
            </div>
          </div>
          <div className="submitcart">
            <div className="submit1">0</div>
            <div className="submit2">
              <button>
                <div className="pretext">
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#69707D"
                      fill-rule="nonzero"
                    />
                  </svg>
                  Add to cart
                </div>

                <div className="pretext done">
                  <div className="posttext"><span>✅✔️☑️</span> ADDED</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}