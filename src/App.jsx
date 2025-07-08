import { useState } from "react";
import "./App.css";
import Hero from "./Sections/Hero";
import ButtonsFixed from "./components/ButtonsFixed";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

function App() {
  return (
    <>
      <Hero />
      <ButtonsFixed />
      <About />
      <Contact />
    </>
  );
}

export default App;
