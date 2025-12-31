import { useState } from "react";

const Counter = () => {
  // console.log("Counter rendered");
  
  // State variable
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  
  // console.log(useState(0)[1]);
  
  // Normal variable (will NOT trigger re-render)
  // let count = 0;
  
  const increment = () => {
    // Updating the value of count does not update UI
    // count++;
    
    const newCount = count + 1;
    // Update state, trigger re-render
    setCount(newCount);
    
    // Change color based on count value
    if (newCount % 2 === 0) {
      setColor("blue");
    } else {
      setColor("red");
    }
    
    // Log the new value of count
    console.log("Count:", newCount);
    
    // Log the old value of count
    // console.log("Count:", count);
  };
  
  return (
    <div>
      <h2 style={{ color }}>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;