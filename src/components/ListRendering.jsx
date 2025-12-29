const ListRendering = () => {
  const CarList = () => {
    const cars = [
      { id: 1, make: "Toyota", model: "Camry", color: "Silver" },
      { id: 2, make: "Tesla", model: "Model 3", color: "Black" },
      { id: 3, make: "Tesla", model: "Model 5", color: "white" },
    ];
    
    return (
      <div>
        <h3>Cars</h3>
        
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              {car.make} {car.model} - {car.color}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  return (
    <>
      <hr />
      <h2>Rendering Lists</h2>
      <CarList />
    </>
  );
};

export default ListRendering;