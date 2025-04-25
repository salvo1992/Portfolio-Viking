import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';



const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          
          <footer>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:items-center sm:gap-4 px-4 py-4">
  <span className="text-sm text-gray-500 dark:text-gray-400">
    © 2025{" "}
    <a href="https://flowbite.com/" className="hover:underline">
      The Viking of the Web™
    </a>
    . All Rights Reserved.
  </span>
  <img
    src="viking_logo1.png"
    alt="Vikingo"
    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
  />
</div>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:items-center sm:gap-4 px-4 py-4">
  <span className="text-sm text-gray-500 dark:text-gray-400">
    © 2025{" "}
    <a href="https://flowbite.com/" className="hover:underline">
      The Viking of the Web™
    </a>
    . All Rights Reserved.
  </span>
  <img
    src="/viking_logo1.png"
    alt="Vikingo"
    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
  />
</div>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/projects/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
