
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './component/Navbar/Navbar';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
