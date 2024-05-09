import React from "react";
import "./ProductDetails.scss";

const ProductDetails = ({ data, close }) => {
    return (
        <>
            <div onClick={() => close(null)} className="product__overlay"></div>
            <div className="product__detail">
                <div className="product__img">
                    <img src={data.images[0]} alt="img" />
                </div>
                <div className="product__info">
                    <h2>{data.title}</h2>
                    <p className="product__desc">{data.description}</p>
                    <p>Price: ${data.price}</p>
                    <p>Stock: {data.stock}</p>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
