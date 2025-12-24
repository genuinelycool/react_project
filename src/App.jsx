const ColorfulComponent = (props) => (
  <div style={{ color: props.color ||"blue" }}>
    <p>This component is {props.color || "blue"}.</p>
    {props.children}
  </div>
);

const UserProfile = (props) => (
  <div>
    <h1>Name: {props.name}</h1>
    <p>Date of Birth: {props.dob}</p>
    <p>Company: {props.company}</p>
    <p>university: {props.university}</p>
  </div>
);

const App = () => {
  const color1 = "blue";
  const color2 = "green";
  
  const userDetails = {
    name: "Mark Zuckerberg",
    dob: "1884-05-14",
    company: "Meta (formerly Facebook)",
    university: "Harvard university",
  };
  
  return (
    <div>
      <ColorfulComponent color={color1}>
        <p>Blue is considered a calming color for the eyes.</p>
      </ColorfulComponent>
      
      <ColorfulComponent color={color2}>
        <p>Green symbolizes nature, renewal, and energy.</p>
      </ColorfulComponent>
      
      <UserProfile 
        // DRY (Don't Repeat Yourself)
        {...userDetails}
      />
      
      {/* 
        
      <UserProfile
        name={userDetails.name}
        dob={userDetails.dob}
        company={userDetails.company}
        university={userDetails.university}
      />
      
      */}
    </div>
  );
}

export default App;