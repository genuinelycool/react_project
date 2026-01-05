import { useState } from "react";
import CartDetails from "./CartDetails";
import AddButton from "./AddButton";

const ShoppingCart = () => {
  const [cart, setCart] = useState(
    // { "Orange": 4, "Banana": 5, "Apple": 2 }
    {}
  );
  
  const prices = { Orange: 0.3, Banana: 0.35, Apple: 0.5 };
  
  // Function to calculate the total cost of items in the cart
  const getTotal = () => {
    // return Object.entries(cart)[0];
    return Object.entries(cart)
      .reduce((total, [item, quantity]) => {
        return total + prices[item] * quantity;
      }, 0)
      .toFixed(2);
  };
  // console.log(getTotal());
  
  // Function to add an item to the cart
  const addItem = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item]: (prevCart[item] || 0) + 1,
    }));
  };
  
  return (
    <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto" }}>
      
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Shopping Cart
      </h2>
      
      <div 
        style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
      >
        <AddButton 
          item="Orange"
          prices={prices}
          color="orange"
          addItem={addItem}
        />
        
        <AddButton 
          item="Banana"
          prices={prices}
          color="yellow"
          addItem={addItem}
        />
        
        <AddButton 
          item="Apple"
          prices={prices}
          color="red"
          addItem={addItem}
        />
      </div>
      
      <CartDetails cart={cart} prices={prices} getTotal={getTotal} />
      
    </div>
  );
};

export default ShoppingCart;