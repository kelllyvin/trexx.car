import { useState } from "react";

import "./App.css";
import Nav from "./Componets/Nav";
import Hero from "./Componets/Hero";
import Exprience from "./Componets/Exprience";
import Featured from "./Componets/Featured";
import Howitworks from "./Componets/Howitworks";
import Revew from "./Componets/Revew";
import Rent from "./Componets/Rent";
import Footer from "./Componets/Footer";



function App() {
  return (
    <>
      <div className="hero h-screen max-h-[600px]bg-no-repeat bg-center">
        <Nav />
        <Hero />
      </div>

      <Exprience />
      <Featured />
      <Howitworks />
      <Revew />
      <div className="Rent h-[389px]  bg-no-repeat bg-center rounded-3xl ">
        <Rent />
      </div>
         
      <Footer />
     
    </>
  );
}

export default App;
