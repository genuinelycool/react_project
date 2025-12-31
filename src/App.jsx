const App = () => {
  const handleParentClick = () => console.log('Parent Clicked');
  // const handleChildClick = () => console.log('Child Clicked');
  
  const handleChildClick = (e) => {
    // Stop event from reaching the parent
    e.stopPropagation();
    console.log('Child Clicked');
  }
  
  return (
    <div
      onClick={handleParentClick}
      style={{
        padding: "30px",
        background: "lightgreen",
        textAlign: "center",
      }}
    >
      Parent
      
      <div
        onClick={handleChildClick}
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "lightblue",
        }}
      >
        Child
      </div>
      
    </div>
  );
};

export default App;