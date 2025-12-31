import Button from "./Button";

const App = () => {
  const changeToGreen = () => {
    document.body.style.backgroundColor = "lightgreen";
  }
  
  const changeToBlue = () => {
    document.body.style.backgroundColor = "lightblue";
  }
  
  return (
    <>
      
      <Button onClick={()=>console.log("Button clicked!")}>
        Log Message
      </Button>
      
      <Button onClick={changeToGreen}>
        Change to Green
      </Button>
      
      <Button onClick={changeToBlue}>
        Change to Blue
      </Button>
      
    </>
  );
};

export default App;