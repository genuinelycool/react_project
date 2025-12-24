const ColorfulComponent = ({ color = "blue", children }) => (
  <div style={{ color: color }}>
    <p>This component is {color}.</p>
    {children}
  </div>
);

const App = () => {
  const color1 = "blue";
  const color2 = "green";
  
  return (
    <div>
      <ColorfulComponent color={color1}>
        <p>Blue is considered a calming color for the eyes.</p>
      </ColorfulComponent>
      
      <ColorfulComponent color={color2}>
        <p>Green symbolizes nature, renewal, and energy.</p>
      </ColorfulComponent>
    </div>
  );
}

export default App;