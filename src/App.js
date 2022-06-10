import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Product from "./component/product";
import Counter from "./component/counter"

  //creating a function
  const handleAddToCartClick = (title) => {
    alert("Add to Cart clicked for " + title);
};

function App(){

  const [count, setCount] = React.useState(5);
  const handleIncrement = ()=>{
      console.log("Increment Called");
      setCount(count + 1);
  };

  const handleDecrement = ()=>{
      setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 style={{backgroundColor:"aqua"}}>Components Example</h1>
      <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <Product
       title="Audi" price="400"  onAddToCart = {handleAddToCartClick} count={count}
      />
      <Product title="Civic" price="600" onAddToCart = {handleAddToCartClick} count={count} />
      <Product title="Suzuki" price="500" onAddToCart = {handleAddToCartClick} count={count} />

    </div>
  );
}
export default App;
