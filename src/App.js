
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Compenents/Home';
import About from './Compenents/About';
import { Contact } from './Compenents/Contact';
import Examples from './Compenents/Examples';
import { Menu } from './Compenents/Menu';
function App() {
  return (
    <div className="App">

    <Menu/>
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/examples' element={<Examples />} />
          <Route path='/contact' element={<Contact />} />
        {/* <Route path='*' element={<PageNotFound404 />} /> */}
      </Routes>
    </div>
  );
}


export default App;