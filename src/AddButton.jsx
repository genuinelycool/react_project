const AddButton = ({ item, prices, color, addItem }) => {
  return (
    <button
      onClick={() => addItem(item)}
      style={{
        backgroundColor: color,
        color: item === "Banana" ? "black" : "white",
        padding: "0.5rem",
        border: "none",
        cursor: "pointer",
      }}
    >
      Add {item} ({prices[item]*100}p)
    </button>
  );
};

export default AddButton;