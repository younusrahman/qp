import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Home from './pages/HomePage';
import Admin from './pages/Admin/AdminPage';
import Customers from './pages/Admin/Customers';
import Employee from './pages/Admin/Employee';


function App() {

  const [navHeight, setNavHeight] = useState<number>();

  useEffect(() => {
    setNavHeight(document.getElementById('GetNavHeight')?.clientHeight)
  }, [])




  return (
    <div className="App" style={{ marginTop: `${navHeight}px` }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home height={navHeight} />} />
        <Route path='/home' element={<Home height={navHeight} />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='cutomers' element={<Customers />} />
          <Route path='employee' element={<Employee />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;


