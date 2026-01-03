import { useState } from "react";
import { produce } from "immer";
import { Trash, RefreshCcw, ArrowDownWideNarrow } from "lucide-react";

const animalOptions = [
  { name: "Cheetah", speed: 130 },
  { name: "African Elephant", speed: 48 },
  { name: "Rabbit", speed: 40 },
  { name: "Horse", speed: 70 },
  { name: "Great Shark", speed: 50 },
  { name: "Kangaroo", speed: 71 },
  { name: "Lion", speed: 80 },
  { name: "Golden Eagle", speed: 320 },
  { name: "Penguin", speed: 9 },
];

const App = () => {
  const [animals, setAnimals] = useState([
    { id: 1, name: "Cheetah", speed: 130 },
    { id: 2, name: "African Elephant", speed: 48 },
    { id: 3, name: "Rabbit", speed: 40 },
    { id: 4, name: "Horse", speed: 70 },
  ]);
  
  // ❌ Incorrect way adding an animal
  const addAnimalIncorrect = () => {
    // ❌ newAnimals points to the same array in memory
    const newAnimals = animals;
    // X push mutates animals since newAnimals points to animals
    newAnimals.push({ id: Date.now(), name: "Lion", speed: 80 });
    setAnimals(newAnimals);
  };
  
  // ✅ Adding a new animal
  const addAnimal = () => {
    setAnimals([
      ...animals,
      { id: Date.now(), name: "Lion", speed: 80 }
    ]);
  };
  
  // ✅ Sorting aanimals by speed
  const sortBySpeed = () => {
    setAnimals([...animals].sort((a, b) => b.speed - a.speed));
  };
  
  // ✅ Replacing an animal with a different random animal
  const replaceAnimal = (id) => {
    // Find the animal being replaced
    const currentAnimal = animals.find((a) => a.id === id);
    
    // Filter out the current animal from animalOptions
    const availableAnimals = animalOptions.filter(
      (a) => a.name !== currentAnimal.name
    );
    
    // Pick a random animal from the filtered list
    const newAnimal = availableAnimals[
      Math.floor(Math.random() * availableAnimals.length)
    ];
    
    setAnimals(animals.map(
      (a) => (a.id === id ? { ...a, ...newAnimal } : a)
    ));
  };
  
  // ✅ Removing an animal
  const removeAnimal = (id) => {
    setAnimals(animals.filter((a) => a.id !== id));
  };
  
  // ✅ Adding a new animal with Immer
  // const addAnimalWithImmer = () => {
  //   setAnimals(
  //     produce(animals, (draft) => {
  //       const newAnimal = {
  //         id: Date.now(), name: "Lion", speed: 80
  //       };
  //       draft.push(newAnimal);
  //     })
  //   );
  // };
  
  const addAnimalWithImmer = () => {
    setAnimals(
      produce(animals, (draft) => {
        const newAnimal = animalOptions[
          Math.floor(Math.random() * animalOptions.length)
        ];
        draft.push(newAnimal);
      })
    );
  };
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}> 
      <h2>Animals and Their Speeds</h2>
      
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={addAnimal}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add Lion
        </button>
        
        <button
          onClick={addAnimalWithImmer}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add Random Animal (Immer)
        </button>
        
        <button
          onClick={sortBySpeed}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <ArrowDownWideNarrow />
        </button>
      </div>
      
      <ul style={{ padding: 0, listStyle: "none" }}>
        {animals.map((a) => (
          <li 
            key={a.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
              fontSize: "16px",
            }}
          >
            <div>
              {a.name} - {a.speed} km/h
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }}>
              <RefreshCcw 
                onClick={() => replaceAnimal(a.id)}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  color: "blue",
                  fontSize: "18px",
                }}
              />
              <Trash 
                onClick={() => removeAnimal(a.id)}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  color: "red",
                  fontSize: "18px",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;