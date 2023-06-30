import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { data } from "./Data";
import { useNavigate, useParams } from "react-router-dom";
import { RecentProduct } from "./RecentProduct";
//import { Star } from "./Star";
// import "./ProductsDetails.css";
import style from "../Navbar.module.css"
import RenderStars from "./Renderstars";


function ProductsDetails({ handleAddProucts }) {

  const navigate = useNavigate();
  const { id } = useParams();
  const { pro1 } = data;
  //css variables 
  const detailContainer = 'detailCont'

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(
      `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?id=${id}`
    )
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const product = pro1.find((item) => item.id == Number(id));
  const product1 = productData.find((item) => item.id == Number(id));

  return (
    <>
      <div className={style[`${detailContainer}`]}>
        <div className={style.navwrap}>
          <Navbar />
        </div>
        <div id={style.prodetails}>
          <div className={style.singleProImage}>
            <img src={product ? product.image : product1.image} />
          </div>
          <div className={style.singleProDetails}>
            <h6>Home/{product ? "Product Details" : product1.category}</h6>
            <h4>{product ? product.title : product1.title}</h4>
            {!product ? (
              <RenderStars stars={product1.rating.rate}/>
            ) : (
              <RenderStars stars={product.rating.rate}/>
            )}

            {!product ? (
              <span style={{ fontSize: "12px" }}>
                ({product1.rating.count} customer reviewed)
              </span>
            ) : (
              <span style={{ fontSize: "12px" }}>
                ({product.rating.count} customer reviewed)
              </span>
            )}

            <h2>Rs. {product ? product.price : product1.price}</h2>
            <button
              onClick={() => handleAddProucts(product ? product : product1)}
              className={style.addToCartBtn}
            >
              Add to Cart
            </button>
            <button
              className={style.buyBtn}
              onClick={() => {
                handleAddProucts(product ? product : product1);
                navigate("/payment");
              }}
            >
              Buy Now
            </button>
            <h4>Product Details</h4>
            <span>
              {product
                ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eveniet sequi nobis, quam velit recusandae modi? Explicabo,laborum. Ratione, optio? Delectus, optio labore omnis culpa earumcorrupti. Tenetur, dignissimos modi. Lorem ipsum, dolor sit ame consectetur adipisicing elit. Vero, perferendis"
                : product1.description}
            </span>
          </div>
        </div>
        <div className={style.recommend}>
          <h2>Recommended Products</h2>
          <RecentProduct />
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;