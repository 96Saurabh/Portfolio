import React from "react";
import { FaStar } from "react-icons/fa";
import "./productInfo.css";

function ProductInfo(props) {
  return (
    <>
      <div className="i-container">
        <div key={props.id} className="i-img">
          <img src={props.image} alt="product-img" className="productImage" />
        </div>
        <div className="i-information">
          <h2 className="i-Name">{props.name} product name</h2>
          <h3 className="i-Name">{props.link} product depoly link : </h3>
          <h3 className="i-Name">{props.frontend} product frontend :</h3>
          <h3 className="i-Name">{props.backend} product backend :</h3>
          <h3 className="i-Name">{props.devopes} product devopes tool :</h3>
          <h3 className="i-Name">{props.others} product other tools :</h3>
          <h3 className="i-Name">{props.info} product information</h3>
          <div className="productRating">
            {[...Array(props.rating)].map((_, index) => (
              <FaStar id={index + 1} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
