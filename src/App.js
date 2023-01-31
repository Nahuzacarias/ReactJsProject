import './App.css';
import Barradetareas from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemlistcontainer from "./Components/Itemlistcontainer/Itemlistcontainer"


function App() {
  return (
    <div className="App">
      <Barradetareas/>
      <Itemlistcontainer Greeting="Bienvenido a mi Tienda!"/>
    </div>
  );
}

export default App;
