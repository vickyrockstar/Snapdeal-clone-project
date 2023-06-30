import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import Logo from "./image/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import style from "../Navbar.module.css";

const PaymentPage = () => {
  const history = useNavigate();
  const CARDDATA = JSON.parse(localStorage.getItem("cartItem"));
  const accountName = useSelector((state) => state.counter.userName)
  const handleCartCheckout = (e) => {
    e.preventDefault();
    localStorage.clear();
    alert("Order Placed");
    history("/");
  };

  return (
    <div className={style.payment}>
      <div
          style={{ height: "90px", zIndex: "0", position: "static" }}
          className={style.navbar}
      >
        <span className={style.logo}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </span>
        <div className={style.searchField}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "300",
              marginRight: "40px",
            }}
          >
            100% Payment Protection, Easy Returns Policy
          </p>
        </div>
      </div>
      <div className={style.paymentwrap}>
        <div className={style.paymentLeft}  >
          <Accordion  defaultActiveKey="0"  >
            <Accordion.Item eventKey="0"  >
          {/* <div className="paymentLogin"> */}
            <Accordion.Header >
            <p>1.Login</p>
            </Accordion.Header>
            <Accordion.Body  >
            <div className={style.paymentLogin}  >
            <p>
              We will send order details to this email address or mobile number
            </p>
            <h5>
              Logged in as <span>{accountName}</span>{" "}
            </h5>
            <a href="#address">
              <button id="continue">CONTINUE</button>
            </a>
            </div>
            </Accordion.Body>
          {/* </div> */}
          </Accordion.Item>
          {/* <div className="paymentAddress paymentLogin"> */}
          <Accordion.Item /* eventKey="1" */ >
          <Accordion.Header >
            2. Delivery Address
          </Accordion.Header>
          <Accordion.Body>
            <div className={style.paymentAddress}>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Address Saved!");
                e.target.reset();
              }}>
                <label htmlFor="">
                  <span>Pincode</span>
                  <input type="text" placeholder="6 digit pincode" />
                </label>
                <label htmlFor="">
                  <span>Name</span>
                  <input type="text" placeholder="Full Name" />
                </label>
                <label htmlFor="">
                  <span>Address</span>
                  <input
                    type="text"
                    placeholder="Flat/House No.Colony/Street No."
                  />
                </label>
                <label htmlFor="">
                  <span>Locality/Landmark</span>
                  <input type="text" placeholder="Eg. Near Apollo Hospital" />
                </label>
                <label htmlFor="">
                  <span>City</span>
                  <input type="text" placeholder="City" />
                </label>
                <label htmlFor="">
                  <span>State</span>
                  <input type="text" placeholder="State" />
                </label>
                <label htmlFor="">
                  <span>Mobile Number</span>
                  <input type="text" placeholder="10 digit mobile number" />
                </label>
                <a href="#pay">
                  <button id="address" type="submit">SAVE AND CONTINUE</button>
                </a>
            </form>
            </div>
            </Accordion.Body>
            </Accordion.Item>
          {/* </div> */}
          {/* <div className="makepayment paymentLogin">*/}
          <Accordion.Item /* eventKey="2" */ >
          <Accordion.Header>
            3. Make Payment
          </Accordion.Header>
          <Accordion.Body>
            <div className={style.paymentOption}>
              <div className={style.paymentOptionLeft}>
                <li>Credit Card</li>
                <li>Debit Card</li>
                <li>Cash On Delivery</li>
              </div>
              <div className={style.paymentOptionRight}>
                <h2>Pay using Credit Card</h2>
                <form onSubmit={handleCartCheckout}>
                  <label htmlFor="">
                    <span>Card Number</span>
                    <input
                      className={style.paymentcardnumber}
                      type="number"
                      placeholder="Card Number"
                    />
                  </label>
                  <label htmlFor="">
                    <span>Expiry Date</span>
                    <select name="" id="" required>
                      <option value="">MM</option>
                      <option value="">01</option>
                      <option value="">02</option>
                      <option value="">03</option>
                      <option value="">04</option>
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                      <option value="">09</option>
                      <option value="">10</option>
                      <option value="">11</option>
                      <option value="">12</option>
                    </select>
                    <span>/</span>
                    <select name="" id="" required>
                      <option value="">YY</option>
                      <option value="">23</option>
                      <option value="">24</option>
                      <option value="">25</option>
                      <option value="">26</option>
                      <option value="">27</option>
                      <option value="">28</option>
                    </select>

                    <span>CVV</span>
                    <input
                      className={style.paymentcvv}
                      type="number"
                      placeholder="CVV"
                      required
                    />
                  </label>
                  <button id="pay" type="submit">
                    PAY RS. 499
                  </button>
                </form>
              </div>
            </div>
            </Accordion.Body>
          </Accordion.Item>  
          {/* </div> */}
          </Accordion>
        </div>
       
        <div className={style.paymentRight}>
          <h4>SUMMARY ({CARDDATA.length} Item)</h4>
          <div className={style.paymntdetail}>
            {CARDDATA.map((item, idx) => {
              return (
                <div key={idx} className={style.cardCheckout}>
                  <h6>{item.title}</h6>
                  <p>
                    Quantity: 1 <span> Rs. {item.price}</span>
                  </p>
                </div>
              );
            })}
            <div className={style.paymentTotal}>
              Total: <span> Rs. {localStorage.getItem("TotalPrice")}</span>
            </div>
            <div className={style.paymentDelivery}>
              Delivery Charges: <span>Free</span>
            </div>
            <div className={style.paymentfinalTotal}>
              You Pay: <span>Rs. {localStorage.getItem("TotalPrice")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
export default PaymentPage;
