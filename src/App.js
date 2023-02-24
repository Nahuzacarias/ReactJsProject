import './App.css';
import Barradetareas from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemlistcontainer from "./Components/Itemlistcontainer/Itemlistcontainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Contact from "./Components/Pages/Contact/Contact"
import About from "./Components/Pages/About/About"
import Item from './Components/Item/Item';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Barradetareas />
        <Itemlistcontainer/>
        <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/inicio' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Item />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
