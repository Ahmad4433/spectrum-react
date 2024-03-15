import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
const App = () => {
  useEffect(()=>{

    window.scroll(0,0)

  },[])


  return (
    <Routes>
 
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
   
    </Routes>
  );
};

export default App;
