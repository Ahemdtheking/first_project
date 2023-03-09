import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nevber from './Components/Nevber';
import Home from './Components/Home';
import Clients from './Components/Clients';
import Services from './Components/Services';
import About from './Components/About';
import ErrorPage from './Components/Error Page';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Nevber />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<ErrorPage />} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
