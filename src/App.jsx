import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, StarsCanvas, Footer } from "./components";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections */}
        <main>
          <Suspense fallback={<div className="text-center text-white mt-10">Loading...</div>}>
            <About />
            <Tech />
            <Works />
            <Experience />
          </Suspense>
        </main>

        {/* Contact & Footer */}
        <div className="relative z-0">
          <Suspense fallback={<div className="text-center text-white mt-10">Loading...</div>}>
            <Contact />
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
