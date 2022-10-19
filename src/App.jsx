import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./assets/default.module.css";
import Header from './components/Header';
import Home from './router/Home';
import MainEntrance from './router/MainEntrance';
import Fdc from './router/FDC';
import Pavilion from './router/Pavilion';
import Exhivitor from './router/Exhivitor';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/MainEntrance" element= {<MainEntrance />}></Route>
        <Route path="/FDC" element= {<Fdc />}></Route>
        <Route path="/Pavilion" element= {<Pavilion />}></Route>
        <Route path="/Exhivitor" element= {<Exhivitor />}></Route>
      </Routes>
    </>
  )
}

export default App;
