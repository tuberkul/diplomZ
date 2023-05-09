import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Popup from './components/PopupCart/PopupCart';

import './App.css';
import NavMenu from './components/NavMenu/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu>
      </NavMenu>
      <Popup> 
      </Popup>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
