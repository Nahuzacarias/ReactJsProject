import './App.css';
import Barradetareas from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemlistcontainer from "./Components/Itemlistcontainer/Itemlistcontainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Contact from "./Components/Pages/Contact/Contact"
import About from "./Components/Pages/About/About"
import CharacterDetail from './Components/Pages/CharacterDetail/CharacterDetail';
import productos from './Components/productos/productos';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <Barradetareas />
        <Itemlistcontainer/>


        {

productos.map((prod) => (
  <productos id={prod.id} nombre={prod.nombre} precio={prod.precio} foto={prod.foto} descripcion= {prod.descripcion} />
  
  ))

}
        <Routes>

        <Route path='/about' element={<About />} />
        <Route path='/inicio' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route part='/detail:id' element={<CharacterDetail/>} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
