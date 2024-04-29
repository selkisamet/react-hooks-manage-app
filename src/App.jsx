import EmployeeList from "./components/EmployeeList";


function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
