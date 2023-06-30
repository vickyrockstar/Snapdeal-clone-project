import React, { useState } from "react";
import Navbar from "./Navbar";
//import QR from "../images/qr.png";
import { Category } from "./Category";
import { Slider } from "./Slider";
import { RecentProduct } from "./RecentProduct";
import  Products from "./Products";
import banner from './image/banner.png';
import service from "./image/service.png";
//import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import style from "../Navbar.module.css";
export const Home = ({ handleAddProucts, cartItems ,apiData, search ,setSearch}) => {
  // const [selectedCategory, setSelectedCategory] = useState("");

  // const handleCategoryChange = (event) => {
  //       const category = event.target.value;
  //       setSelectedCategory(category);
    
  //       if (category === "") {
  //         setFilteredProducts(products);
  //       } else {
  //         fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?category=${category}`)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             setFilteredProducts(data);
  //           });
  //       }
  //     };
  return (
  
    <>
       <div >
        <div className={style.navwrap}>
          <Navbar setSearch={setSearch} cartItems={cartItems} />
        </div>
        
        <div className={style.container}>
            <Category />
            {/* <img className="catQr" src={QR} alt="" /> */}

           <div className={style.rightside}>
           
            <Slider /> 
            <RecentProduct handleAddProucts={handleAddProucts} title="TRENDING PRODUCTS" />
          </div>
        </div>
        <div className={style.products}>
        <h4 className={style.proHead}>All Products</h4>
          
          <Products 
           handleAddProucts={handleAddProucts}
           apiData={apiData}
           search={search}
           setSearch={setSearch} 
           />
        </div>
       
        </div>
        <div className={style.banner}>
          <img  src={banner} alt="" />
        </div>

        <div className={style.service}>
          <img  src={service} alt="" />
        </div>

      <Footer />
    </>
  );
};
