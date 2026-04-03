import React from "react";
import Navbar from "../src/layout/Navbar";
import Hero from "./sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Home } from "lucide-react";
import { Footer } from "./layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects/>
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
