import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const [showCart, setShowCart] = useState(true);
  
  // Function to remove the ShoppingCart
  const removeCart = () => {
    setShowCart(false); // This will hide the ShoppingCart
  };
  
  return (
    <div>
      {/* Button to remove the ShoppingCart*/}
      <button onClick={removeCart}>Remove ShoppingCart</button>
      
      {/* Conditionally render ShoppingCart*/}
      {showCart && <ShoppingCart />}
    </div>
  );
};

export default App;