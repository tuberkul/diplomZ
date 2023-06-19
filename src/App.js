import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

import Popup from './components/PopupCart/PopupCart';
import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';

import './App.css';
import { useState } from 'react';


function App() {
  const[PopupClass, setPopupClass] = useState("popupBoxClose");

  return (
    <div className="App">

      <Popup PopupClass={PopupClass} setPopupClass={setPopupClass}> 
      </Popup>
      <Router>
      <NavMenu setPopupClass={setPopupClass}>
      </NavMenu>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/menu' element={<Menu />} />
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
