const App = () => {
  const handleLinkClick = (event) => {
    // Prevent navigation to another page
    event.preventDefault();
    console.log("Link click prevented!");
  };
  
  const handleFormSubmit = (event) => {
    // Prevent form submission
    event.preventDefault();
    console.log("Form submission prevented!");
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("message");
    console.log("Submitted Data:", { name });
  };
  
  return (
    <div>
      <a 
        href="https://example.com"
        onClick={handleLinkClick}
      >
        Link
      </a>
      
      <form
        style={{ display: "flex", gap: "10px", marginTop: "20px" }}
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          name="message"
          placeholder="Enter your message"
          style={{ padding: "5px" }}
        />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default App;