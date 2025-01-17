import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Footer } from "./components";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarCanvas = lazy(() => import("./components/canvas/StarCanvas"));

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
          </Suspense>
        </main>

        {/* Contact & Footer */}
        <div className="relative z-0">
          <div className="relative w-full h-full">
            <Suspense fallback={<div className="text-center text-white mt-10">Loading...</div>}>
              <div className="absolute inset-0 -z-10">
                <StarCanvas />
              </div>
              <Contact />
            </Suspense>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
