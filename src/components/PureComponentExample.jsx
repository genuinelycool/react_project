const PureComponentExample = () => {
  const Greeting = ({ name }) => <h3>Hello, {name}!</h3>
  
  let counter = 0;
  const ImpureGreeting = ({ name }) => {
    counter++;
    return <h3>Hello, {name}! Count: {counter}</h3>;
  };
  
  return (
    <>
      <hr />
      <h2>Pure vs Impure Components</h2>
      
      <Greeting name="John" />
      <Greeting name="John" />
      
      <ImpureGreeting name="Doe" />
      <ImpureGreeting name="Doe" />
    </>
  );
};

export default PureComponentExample;