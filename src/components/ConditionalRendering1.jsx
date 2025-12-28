const SpeedMessage = ({ speed }) => {
  const speedLimit = 50;
  
  const message = speed <= speedLimit ? (
    <p>Speed is okay.</p>
  ) : (
    <p>Too fast!</p>
  );
  
  const style = {
    backgroundColor: speed <= speedLimit ? "#90ee90" : "#f08080",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "8px",
    color: "#333",
  };
  
  return (
    <div style={style}>
      <p>Speed: {speed} mph</p>
      {message}
    </div>
  );
};

const ConditionalRendering1 = () => {
  return (
    <>
      <hr />
      <h2>Conditional Rendering 1</h2>
      
      <SpeedMessage speed={35} />
      <SpeedMessage speed={55} />
      <SpeedMessage speed={85} />
    </>
  );
};

export default ConditionalRendering1;