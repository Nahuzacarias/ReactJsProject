import './App.css';
import Barradetareas from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from "./Components/itemlistcontainer"


function App() {
  return (
    <div className="App">
      <Barradetareas/>
      <Greeting/>
    </div>
  );
}

export default App;
