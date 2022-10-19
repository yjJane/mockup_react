import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from '../pages/Home';
import MainEntrance from '../pages/MainEntrance';
import Fdc from '../pages/FDC';
import Pavilion from '../pages/Pavilion';
import Exhivitor from '../pages/Exhivitor';


const AppRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<MainEntrance />}></Route>
      <Route path="/MainEntrance" element= {<MainEntrance />}></Route>
      <Route path="/FDC" element= {<Fdc />}></Route>
      <Route path="/Pavilion" element= {<Pavilion />}></Route>
      <Route path="/Exhivitor" element= {<Exhivitor />}></Route>
    </Routes>
  )
}

export default AppRouter;