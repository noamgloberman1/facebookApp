import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Layout from './pages/Layout';

function App() {

  const [result, setResult] = useState("");


  useEffect(() => {
    document.title = 'FaceBook';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Layout result = {result} setResult = {setResult}><Home result = {result} setResult = {setResult} /></Layout>}></Route>
          <Route path="/profile" element={<Layout result = {result} setResult = {setResult}><Profile result = {result} setResult = {setResult} /></Layout>}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
