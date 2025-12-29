const TodoItem = ({ description, finished }) => {
  const style = {
    border: "1px solid #ddd",
    margin: "5px 0",
    padding: "8px",
    borderRadius: "5px"
  };
  
  return <li style={style}>{description}{finished && " ✅"}</li>;
};

const TodoList = () => (
  <div>
    <h3>My To-Do List</h3>
    <ul style={{ listStyle: "none", padding: 0 }}>
      <TodoItem description="Buy groceries" finished={false} />
      <TodoItem description="Wash the car" finished={true} />
      <TodoItem description="Read a book" finished={false} />
    </ul>
  </div>
);

const ConditionalRendering2 = () => {
  return (
    <>
      <hr />
      <h2>Conditional Rendering 2</h2>
      
      <TodoList />
    </>
  );
};

export default ConditionalRendering2;