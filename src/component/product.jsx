import React from 'react';
import './productStyles.css';
const Product = ({title, price, onAddToCart, count}) => {

    var priceClass = price <=500? "orange":"green";
    //creating a function
    return (
         <div>
            <h1 style= {{backgroundColor: "yellow" }}> {title} </h1>
            {count}
            <span className={priceClass}>

                <b>Price:</b> {price}
                <button
                 onClick={ ()=> {
                    onAddToCart(title);
                }}
                >
                    Add to Cart
                </button>
                <hr />
            </span>
         </div>
     );
}
export default Product;