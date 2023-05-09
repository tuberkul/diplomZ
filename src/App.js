import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

import './App.css';
import NavMenu from './components/NavMenu/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
