import React from "react";
import { Link } from "react-router-dom";
//CSS
import "./styles/Product.css";
function Product({ id, name, price, img }) {
    return (
        <>
        <Link 
        to={`/products/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}>
        <div className="product">
            <img src={img} alt="product_img" />
            <div className="product__info">
                <p>{name}</p>
            </div>
            <p className="product__price">
                    $
                    <strong>{price}</strong>
            </p>
        </div>
        </Link>
        <div className="product_add__div">
        <button className="product__add">Add to cart</button>
        </div>
        </>


    );
}

export default Product;
