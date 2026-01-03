import { useState } from "react";
import { produce } from "immer";

// NOTE: ✅ Always create new objects when updating states to ensure react’s efficient reconciliation

const App = () => {
  // State for the counter
  const [user, setUser] = useState({
    name: "Alice",
    details: {
      age: 25,
      location: "New York",
    },
  });
  
  // ❌ Incorrect: Mutating the existing state directly
  const updateNameIncorrect = () => {
    // Directly modifying state (WRONG)
    user.name = "Bob";
    // Setting the same object reference (React won't detect change)
    setUser(user);
  };
  
  // ✅ Correctly updating the object state (without mutation)
  const updateName = () => {
    setUser({ ...user, name: "Bob" });  // Creating a new object
  };
  
  // ✅ Updating a nest oject without mutation
  const updateLocation = () => {
    setUser({
      ...user,
      details: {
        ...user.details,  // Copy existing details
        location: "San Francisco", // Update only location
      },
    });
  };
  
  // ✅ Using Immer to simplify updates
  const updateAgeWithImmer = () => {
    setUser(
      produce(user, (draft) => {
        // Immer allows directly updates without breaking immutability
        draft.details.age = 30;
      })
    );
  };
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}> 
      
      <button onClick={updateName}>Change Name to Bob</button>
      <button onClick={updateLocation}>Change Location to San Francisco</button>
      <button onClick={updateAgeWithImmer}>Change Age to 30</button>
      
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Age:</strong> {user.details.age}
      </p>
      <p>
        <strong>Location:</strong> {user.details.location}
      </p>
    </div>
  );
};

export default App;