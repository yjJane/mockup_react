import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../router/Home";
import MainEntrance from '../router/MainEntrance';
import Fdc from "../router/FDC";
import Pavilion from "../router/Pavilion";
import Exhivitor from "../router/Exhivitor";


const AppRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/MainEntrance" element= {<MainEntrance />}></Route>
      <Route path="/FDC" element= {<Fdc />}></Route>
      <Route path="/Pavilion" element= {<Pavilion />}></Route>
      <Route path="/Exhivitor" element= {<Exhivitor />}></Route>
    </Routes>
  )
}

export default AppRouter;