import { useState } from "react";

const App = () => {
  // State for the counter
  const [count, setCount] = useState(0);
  
  // Updating state by passing a value (may cause stale state issues)
  const incrementWithValue = () => {
    setCount(count + 1);
    setCount(count + 1);  // Might not work as expected due to stale state
  };
  
  // Updating state by passing a function (always gets teh latest state)
  const incrementWithFunction = () => {
    setCount(prev => prev + 1);
    console.log(count);
    setCount(prev => prev + 1); // Correctly updates twice
    console.log(count);
  };
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}> 
      <h1>Counter: {count}</h1>
      
      <button
        onClick={incrementWithValue}
        style={{ margin: "5px", padding: "10px" }}
      >
        Increment (Using Value)
      </button>
      
      <button
        onClick={incrementWithFunction}
        style={{ margin: "5px", padding: "10px" }}
      >
        Increment (Using Function)
      </button>
    </div>
  );
};

export default App;