import React from "react";
// import "./Navbar.css";
import Logo from "./image/logo.png";
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import {db} from '../firebase.js';
// import { collection, addDoc } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux'
// import  { useEffect } from 'react';
// import { query, onSnapshot } from "firebase/firestore";
// import { useDispatch } from 'react-redux';
import style from "../Navbar.module.css";
// const isAuthenticated = true; 
import { auth } from './firebase';
import { userName } from '../reduxTool/validSlice';
const Navbar = ({ setSearch }) => {
  const accountName = useSelector((state) => state.counter.userName);
  const localData = JSON.parse(localStorage.getItem("cartItem")) || [];
  /* const [userN, setuserName]=useState(); */
  const dispatch = useDispatch();
  

// console.log(accountName)
  const handleLogout = async () => {
    try {
      // Sign out the user using Firebase signOut method
      await auth.signOut();

      // Perform any other necessary cleanup or state updates

      // Clear the user name in the Redux store
      dispatch(userName('SignUp'));
    } catch (error) {
      // Handle any errors that occur during signout
      console.error('Error during signout:', error);
    }
  };

  return (
    <>
      <div className={style.navbar}>
        <span className={style.logo}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </span>
        <div className={style.searchField}>
          <input type="text" placeholder="Search Products & brands" onChange={(e) => {
              setSearch(e.target.value);
            }}/>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </button>
        </div>
        <div className={style.userAuth}>
          <Link to="/cart">
            <button className={style.navBTN}>
              Cart <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </button>
            {localData.length !== 0 && (
              <span className={style.cartlength}>{localData.length}</span>
            )}
          </Link>
          {accountName === "SignUp"  ? (
              <div className={style.moreitems2}>
                <p>{accountName}</p>
                <i className="fas fa-user-circle"></i>
                <div className={style.signsub}>
                  <p>If you are a new user</p>
                  <Link to="/Signup">
                    <h3 style={{ fontSize: "20px" }}>Register</h3>
                  </Link>
                  <Link to="/login">
                    <h2 className={style.loginbtn}>Login</h2>
                  </Link>
                </div>
              </div>
          ) : (
            <div className={style.moreitems2}>
            <p>{accountName}</p>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <i className="fas fa-user-circle"></i>
            <div className={style.signsub}>
            <ul>
                <li>
                  <i class="far fa-user"></i>
                  <Link to="/">Your Account</Link>
                </li>
                <li>
                  <i class="fas fa-box-open"></i>
                  <Link to="/cart">Your Orders</Link>
                </li>
              </ul>
                  <button  className={style.loginbtn} onClick={handleLogout}>Logout</button>
                </div>
          </div>
           
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
