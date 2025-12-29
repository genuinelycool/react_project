const ShoppingList = ({ items }) => {
  const listStyle = {
    listStyle: "none",
    padding: 0
  };
  
  const itemStyle = {
    padding: "8px",
    margin: "4px 0",
    border: "1px solid #ccc",
    borderRadius: "5px"
  };
  
  const extendedItems = [...items, { id: "add", label: "Add Item" }];
  
  return (
    <ul style={listStyle}>
      {extendedItems.map((item) => (
        <li key={item.id} style={itemStyle}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const PurePropsExample = () => {
  const items = [
    { id: 1, label: "Milk" },
    { id: 2, label: "Bread" },
    { id: 3, label: "Eggs" },
  ];
  
  return (
    <>
      <hr />
      <h2>Purity with Props Example</h2>
      
      <ShoppingList items={items} />
    </>
  );
};

export default PurePropsExample;