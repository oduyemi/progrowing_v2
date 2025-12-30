import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./navigation/index";
import Home from './pages/Home';
import Mentor from './pages/Mentor';
import Admin from './pages/Admin';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mentors" element={<Mentor />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
