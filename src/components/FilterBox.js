import React, { useState, useEffect } from "react";
import style from "../Navbar.module.css"
import Products from "./Products";
import { Box, Heading } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import ReactSlider from "react-slider";

export const FilterBox = ({
  handleCategory,
  apiData,
  setFilteredProducts,
  APICategory,
  filteredProducts,
  setSearch,
}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleSort = (sortOrder) => {
    const sortedItems = [...filteredProducts];
    if (sortOrder === "") {
      setFilteredProducts(apiData);
      return;
    }

    if (sortOrder === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedItems);
  };

  const handleFilterByPrice = () => {
    const filteredItems = apiData.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setFilteredProducts(filteredItems);
  };


  useEffect(() => {
    setFilteredProducts(apiData);
  }, [apiData]);
 
  return (
    
    <div className={style.filter}>
      <Heading as='h4' size='md' color={"black"} paddingTop='50px' className={style.filterHeading}>
        FILTER
      </Heading>
      <div className={style.sliderContainer}>
      <ReactSlider
        className={style.ReactSlider}
        min={0}
        max={1000}
        step={10}
        value={[minPrice, maxPrice]}
        onChange={(value) => {
          setMinPrice(value[0]);
          setMaxPrice(value[1]);
        }}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`ReactSlider ${
              state.index === 0 ? "min-slider" : "max-slider"
            }`}
          />
        )}
        pearling
        allowCross={false}
      >
        <div className="slider-handle" />
        <div className="slider-handle" />
      </ReactSlider>
    </div>
    <div className={style.priceRangeFilter}>
      <div className={style.priceInputs}>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
        />
        <button onClick={handleFilterByPrice}>Go</button>
      </div>
  </div>
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div >
          <div className={style.filtertitle}>
              <input type="checkbox" value="" onChange={handleCategory}
                checked={APICategory.includes("")}/>
              <label>All </label>
            </div>
            <div className={style.filtertitle}>
              <input type="checkbox" value="men's clothing" onChange={handleCategory}
                checked={APICategory.includes("men's clothing")}/>
              <label>Men clothing</label>
            </div>
            <div className={style.filtertitle}>
              <input type="checkbox" value="women's clothing" onChange={handleCategory}
                checked={APICategory.includes("women's clothing")} />
              <label>women clothing</label>
            </div>

            <div className={style.filtertitle}>
              <input type="checkbox" value="jewelery" onChange={handleCategory}
                checked={APICategory.includes("jewelery")} />
              <label>Jewellery</label>
            </div>
            <div className={style.filtertitle}>
              <input type="checkbox" value="electronics" onChange={handleCategory}
                checked={APICategory.includes("electronics")} />
              <label>Electronics</label>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
      
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Sort By Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div  >
            <div className={style.filtertitle}>
              <input type="radio" name="sort_by" value="lowToHigh" onChange={(e) => handleSort(e.target.value)}/>
              <label>Low To High</label>
            </div>
            <div className={style.filtertitle} >
              <input type="radio" name="sort_by" value="highToLow" onChange={(e) => handleSort(e.target.value)}/>
              <label>High To Low</label>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
{/* 
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Sort By Title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div onChange={handleSort} >
            <div className={style.filtertitle}>
              <input type="radio" name="sort" value="A to Z" />
              <label>A to Z</label>
            </div>
            <div className={style.filtertitle} >
              <input type="radio" name="sort" value="ZtoA" />
              <label> Z to A</label>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem> */}
    </Accordion>
  </div>
  );
};