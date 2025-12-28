const JSInJSXExample = () => {
  const userName = "Alice";
  const greetUser = (name) => `Hello, ${name}!`;
  const userInfo = { age: 25, location: "New York" };
  const titleStyle = { color: "blue", textAlign: "center", margin: "20px 0" };
  
  return (
    <>
      <h2>JS in JSX Example</h2>
      <p>Your name: {userName}</p>
      <p>{greetUser(userName)}</p>
      <p>
        Age: {userInfo.age}, Location: {userInfo.location}
      </p>
      <h3 style={titleStyle}>Styled via JS object</h3>
    </>
  );
};

export default JSInJSXExample;