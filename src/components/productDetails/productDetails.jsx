import React from "react";
import {
//   FaShoppingCart,
//   FaRegBookmark,
  FaStar,
//   FaFireAlt,
} from "react-icons/fa";
import "./productDetails.css";

export function ProductDetails(props) {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img src={props.image} alt="product-img" className="productImage" />

        {/* <FaShoppingCart className={"productCard__cart"} />
        <FaRegBookmark className={"productCard__wishlist"} /> */}
        {/* <FaFireAlt className={"productCard__fastSelling"} /> */}

        <div className="productCard__content">
          <h3 className="productName">{props.name}</h3>
          <div className="displayStack__1">
            {/* <div className="productPrice">{props.price}</div> */}
            
            {/* <div className="productSales">{props.totalSales} units sold<  /div> */}
          </div>
          
          {/* <div className="displayStack__2">
            <div className="productRating">
              {[...Array(props.rating)].map((_, index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
            
          </div> */}
            <div className="productTime">Skills: {props.skills}</div>
            <div className="productButton" onClick={navigator}>Read More</div>
        </div>
         
      </div>
    </div>
  );
}
