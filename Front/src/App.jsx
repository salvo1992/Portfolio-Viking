import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
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
import CookiePolicy from "./Pages/CookiePolicy";
import CookieBanner from "./common/CookieBanner";
import TermsPrivacy from "./Pages/TermsPrivacy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";



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
          <CookieBanner />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          
          <footer>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:items-center sm:gap-4 px-4 py-4">
  <span className="text-sm text-gray-500 dark:text-gray-400">
    © 2025{" "}
    <a href="https://www.thevikingoftheweb.it" className="hover:underline">
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
       <div className="flex justify-center items-center mt-4">
            <a href="/cookie-policy" className="text-sm text-blue-500 hover:underline">
              Cookie Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-privacy" className="text-sm text-blue-500 hover:underline">
              Terms and Privacy
            </a>
            <span className="mx-2">|</span>
            <a href="/privacy-policy" className="text-sm text-blue-500 hover:underline">
              Privacy Policy
            </a>
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
    <a href="https://www.thevikingoftheweb.it" className="hover:underline">
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
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-privacy" element={<TermsPrivacy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
