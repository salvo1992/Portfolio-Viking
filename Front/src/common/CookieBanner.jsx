import React, { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">Questo sito utilizza i cookie per migliorare l’esperienza utente.</p>
      <button
        onClick={acceptCookies}
        className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition"
      >
        Accetta
      </button>
    </div>
  );
};

export default CookieBanner;
