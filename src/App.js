import Greeting from "./components/Greeting";
import logo from "./logo.svg";
import "./App.css";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <Greeting />
      <Async />
    </div>
  );
}

export default App;

// To start Test
// "npm test"
