
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import { Link } from "react-router-dom";
import {data} from "./Data";
import { Link } from "react-router-dom";
// import "./RecentProducts.css"
import style from "../Navbar.module.css"
import RenderStars from "./Renderstars";



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const RecentProduct = ({ title, handleAddProucts }) => {
  const {pro1} = data;
  return (
    <div className={style.recentPro}>
      <div className={style.rec}>
        <h4>{title}</h4>
        <Carousel  responsive={responsive}>
          {pro1.map((item) => {
            return (
              <div key={pro1.id} className={style.pro}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/detail/${parseInt(item.id)}`}
                >
                  <img src={item.image} alt="" />

                  <div className={style.detail}>
                    <h4>{item.title.slice(0, 50)}</h4>
                    <div><RenderStars stars={item.rating.rate}/></div>
                    <div className={style.pricediv}>
                      <h5 className={style.disprice}>₹{item.price}</h5>
                      <h5 className={style.orgprice}>{((item.price * 1.30).toFixed(2))}</h5>
                      <h5 className={style.discountPercentage}>30% off</h5>
                    </div>
                  </div>
                </Link>
                <button
                  className={style.productCart}
                  onClick={() => handleAddProucts(item)}
                >
                  <i class="fa-solid fa-bag-shopping fa-bounce"></i>
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};