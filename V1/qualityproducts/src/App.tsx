import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (

      
        <Routes>
          <Route path="/about" element={<About/>}/>
           
        
          <Route path="/home" element={<Home/>}/>
           
   
          <Route path="/" element={<Home/>}/>
           
       
        </Routes>

  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
