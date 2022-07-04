import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Me from "./About.js"
import Dir from "./Navbar.js"
import App from "./App.js"

const Home = () => {
  const Inicio = () => <h1>Inicio</h1>;
  const About = () => <h1>ABOUT</h1>;
  return (
    <>
    <Dir />
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<App />}></Route>
          <Route path="/matricula" element={<Me />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default Home;