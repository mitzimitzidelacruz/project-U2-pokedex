import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import  Main  from "./Main.js"
import Me from "./About.js"
import Dir from "./Navbar.js"

const Home = () => {
  const Inicio = () => <h1>Home</h1>;
  const About = () => <h1>161000</h1>;
  return (
    <>
    <Dir />
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<Main />}></Route>
          <Route path="/matricula" element={<Me />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default Home;