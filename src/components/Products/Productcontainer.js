import React from "react";
import "./Productcontainer.css";
import { Link } from "react-router-dom";

const Productcontainer = (product) => {
  //let overalltax = 10 / 100;
  //let overcommission = 10 / 100;
  //let extraforfun = 10 / 100;
  let p = product.product;

  console.log(p);
  let dollar = parseInt(p.price);
  //mrp = mrp + overalltax * mrp + overcommission * mrp + extraforfun * mrp;
  //const saleprice = mrp - extraforfun * mrp;
  return (
    <div className="product-container">
      <img src={p.productImage} />
      <div className="product-details">
        <a href={`/product/${p.producttype}/${p.id}`}>
          <button className="producttitle">{p.producttitle}</button>
        </a>
        <div className="price-container">
          <p className="mrp">
            USD:<p className="rate">${dollar}</p>
          </p>
        </div>
        <div className="buy-cart">
          <button className="btn">Buy Now</button>
          <button className="btn">Add to Cart</button>
          <a href={`/product/${p.producttype}/${p.id}`}>
            <button className="showmore-btn">Show More &gt;</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Productcontainer;
