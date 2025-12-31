const App = () => {
  const handleClick = () => console.log("Button clicked!");
  
  let count = 0;
  const handleIncrement = () => {
    count++;
    console.log(count);
  }
  
  return (
    <>
      {/* <button onClick={() => console.log("Button clicked!")}>*/}
      <button onClick={handleClick}>
        Click me
      </button>
      
      <button onClick={handleIncrement}>
        Increment
      </button>
      
    </>
  );
};

export default App;