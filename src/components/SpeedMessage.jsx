const SpeedMessage = ({ speed }) => {
  const speedLimit = 50;
  
  const message = speed <= speedLimit ? (
    <p>Your speed is okay.</p>
  ): (
    <p>You are going too fast!</p>
  );
  
  const backgroundColor = speed <= speedLimit
    ? "#90ee90"
    : "#f08080";
  
  const messageStyle = {
    backgroundColor,
    color: "#333",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    fontWeight: "bold",
    tetAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  };
  
  return (
    <div style={messageStyle}>
      <p>Your speed is: {speed} mph.</p>
      {message}
    </div>
  );
};

export default SpeedMessage;