import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
// import "./Cart.css"
import style from "../Navbar.module.css";

export const Cart = ({setCartItems }) => {
  const cartItemList = 'cartitemlist'; 
  const cartContainer = 'cartcontainer'
  const cartCon = 'cartcon'
  var localData = JSON.parse(localStorage.getItem("cartItem")) || [];
  const totalPrice = localData.reduce(
    (price, item) => price + parseInt(item.quantity) * parseFloat(item.price),
    0
  );
  localStorage.setItem("TotalPrice", totalPrice.toFixed(2));
  // console.log("Total", totalPrice);


  const handleRemoveProducts = (productID) => {
    let prev = localData.filter((item) => item.id !== productID);
    setCartItems(prev);
    localStorage.setItem("cartItem", JSON.stringify(prev));
  };
  const qunatityInc = (product) => {
    let updatedData = localData.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedData);
    localStorage.setItem("cartItem", JSON.stringify(updatedData));
  };
  const qunatityDec = (product) => {
    const productExist = localData.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      alert("Minimum one qunantity required");
      return;
    }
    let updatedData = localData.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedData);
    localStorage.setItem("cartItem", JSON.stringify(updatedData));
  };
  // console.log(localData)
  const CARDDATA = localData.map((item, idx) => {
    return (
      <div key={idx} id={item.id} className={style[`${cartItemList}`]}>
        <div className={style.itemDetail}>
          <img className={style.cartitemimage} src={item.image} alt={item.name} />
          <div className={style.cartitemname}>{item.title}</div>
        </div>

        <div className={style.cartitemprice}>Rs. {item.price.toFixed(2)}</div>
        <div className={style.cartitemsfunction}>
          <span className={style.classitemadd} onClick={() => qunatityInc(item)}>
            +
          </span>
          <div className={style.cartitemquantity}>{item.quantity}</div>
          <span
            className={style.classitemremove}
            onClick={() => qunatityDec(item)}
          >
            -
          </span>
        </div>
        <button className={style.Remove} onClick={() => handleRemoveProducts(item.id)}>
          REMOVE
        </button>

        <div className={style.carttotalprice}>Rs. {(item.price * item.quantity).toFixed(2)}</div>
      </div>
    );
  });

  return (
    <>
      <div className={style.navwrap}>
        <Navbar/>
      </div>

      <div className={style[`${cartCon}`]}>
        {/* <span className="cart-item-header">Shopping Cart</span> */}

        {localData.length === 0 ? (
          <div className={style.cartitemsempty}>
            <p>Shopping Cart is empty!</p>
            <Link to="/">
              <button>START SHOPPING NOW</button>
            </Link>
          </div>
        ) : (
          <div className={style[`${cartContainer}`]}>
            <h3>Shopping Cart ({localData.length} Item)</h3>
            <div>
              <tr className={style.cartrow}>
                <th>Item Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th>Subtotal</th>
              </tr>
              {CARDDATA}
            </div>
          </div>
        )}
        {localData.length !== 0 && (
          <div className={style.FinalTotla}>
            <div className={style.carttotalpricename}>
              <span className={style.totalprice}>
                Sub Total: <span> Rs.{totalPrice}</span>
                {localStorage.setItem("TotalPrice", totalPrice)}
              </span>
              <span className={style.dCharge}>
                Delivery Charges:
                <span>FREE</span>
              </span>
            </div>
            <div className={style.checkout}>
            
              {localData.length >= 1 && (
                <Link to="/payment">
                  <button className={style.buybtn}>
                    PROCEED TO PAY RS. {localStorage.getItem("TotalPrice")}
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
