// const ColorfulComponent = (props) => (
//   <div style={{ color: props.color ||"blue" }}>
//     <p>This component is {props.color || "blue"}.</p>
//     {props.children}
//   </div>
// );

// const ColorfulComponent = ({ color, children }) => (
//   <div style={{ color: color ||"blue" }}>
//     <p>This component is {color || "blue"}.</p>
//     {children}
//   </div>
// );

const ColorfulComponent = ({ color = "blue", children }) => (
  <div style={{ color }}>
    <p>This component is {color}.</p>
    {children}
  </div>
);

// const UserProfile = (props) => (
//   <div>
//     <h1>Name: {props.name}</h1>
//     <p>Date of Birth: {props.dateOfBirth}</p>
//     <p>Company: {props.company}</p>
//     <p>University: {props.university}</p>
//   </div>
// );

const UserProfile = ({ name, dateOfBirth, company, university }) => (
  <div>
    <h1>Name: {name}</h1>
    <p>Date of Birth: {dateOfBirth}</p>
    <p>Company: {company}</p>
    <p>University: {university}</p>
  </div>
);

const PropsExample = () => {
  const color1 = "blue";
  const color2 = "green";
  
  const userDetails = {
    name: "Mark Zuckerberg",
    dateOfBirth: "1984-05-14",
    company: "Meta",
    university: "Harvard University",
  };
  
  return (
    <>
      <hr />
      <h2>Props Example</h2>
      
      <ColorfulComponent color={color1} >
        <p>Blue is calming.</p>
      </ColorfulComponent>
      
      <ColorfulComponent color={color2}>
        <p>Green symbolizes nature.</p>
      </ColorfulComponent>
      
      {/* 
      <UserProfile 
        name = {userDetails.name}
        dateOfBirth = {userDetails.dateOfBirth}
        company = {userDetails.company}
        university = {userDetails.university}
      />
      */}
      
      <UserProfile {...userDetails} />
    </>
  );
};

export default PropsExample;