import React from "react";

import style from "../Navbar.module.css"
import RenderStars from "./Renderstars";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FilterBox } from "./FilterBox";
function Products({ handleAddProucts ,search, setSearch ,apiData}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    setFilteredProducts(apiData);
  }, []);
  const APICategory = ["All", ...new Set(apiData.map((item) => item.category))];
  //console.log(APICategory);

  useEffect(() => {
    fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = Math.ceil(filteredProducts.length / productsPerPage);
  const pagination = [];
  

  for (let i = 1; i <= pageNumbers; i++) {
    pagination.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={ ` ${i === currentPage ? "style.active" : "style.inactive"}`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={style.filterProd}>
      <div className={style.filterBoxLeft}>
      <FilterBox
          handleCategory={handleCategoryChange}
          setFilteredProducts={setFilteredProducts}
          apiData={apiData}
          APICategory={APICategory}
          filteredProducts={filteredProducts}
          setSearch={setSearch}
        />
        </div>
        <div className={style.rightProducts}>
          <div className={style.proWrap}>
          {currentProducts.filter((val) => {
            if (search == "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((product) => (
            <div key={product.id} className={style.pro}>
              <Link 
                style={{ textDecoration: "none", color: "black" }}
                to={`/detail/${parseInt(product.id)}`}>
              <img className={style.itemImg} src={product.image} alt={product.name} />
              <div className={style.Detail}>
                <h4>{product.title.slice(0, 50)}</h4>
                <div><RenderStars stars={product.rating.rate}/></div>
                <div className={style.pricediv}>
                <h5 className={style.disprice}>₹{product.price}</h5>
                <h5 className={style.orgprice}>{((product.price * 1.25).toFixed(2))}</h5>
                <h5 className={style.discountPercentage}>25% off</h5>
                </div>
              </div>
              </Link>
                <button  title="carticon" className ={style.cartIcon} onClick={() => handleAddProucts(product)}>
                {/* <FontAwesomeIcon icon={faBagShopping}  /> */}
                <i class="fa-solid fa-bag-shopping fa-bounce"></i>
                  </button>
            </div>
           ))}
           </div>
          <div className={style.pagination}>
          {pagination}
          </div>
        </div>
    </div>
  );
}

export default Products;