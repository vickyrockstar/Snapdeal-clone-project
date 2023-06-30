import React from "react";
import style from "../Navbar.module.css"

const RenderStars = ({stars}) => {
  function starratings(rating){
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const starElements = [];
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    if (halfStar === 1) {
      starElements.push(<i key="half" className="fa-solid fa-star-half"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<i key={`empty${i}`} className="fa-regular fa-star"></i>);
    }

    return starElements;
  }
  return(
    <div>
      <span className={style.ratingstar}>{starratings(stars)}</span>
    </div>
  )
  };
  export default RenderStars;