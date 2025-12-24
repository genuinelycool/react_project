import CarList from "./components/CarList";

const App = () => {
  return (
    <div>
      <h1>Welcome to the Car Showroom</h1>
      {/* <CarList />*/}
      {/* <CarList make="Toyota" />*/}
      <CarList make="Tesla" />
    </div>
  )
}

export default App;