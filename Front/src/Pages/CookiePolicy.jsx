import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Cookie Policy</h1>
      <p className="mb-4">
        Questo sito utilizza i cookie per garantire la migliore esperienza possibile. I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo mentre navighi.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Tipi di Cookie Utilizzati</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Cookie Tecnici:</strong> Necessari per il corretto funzionamento del sito.</li>
        <li><strong>Cookie di Performance:</strong> Raccolgono dati anonimi per migliorare il sito.</li>
        <li><strong>Cookie di Profilazione:</strong> Utilizzati per personalizzare contenuti e pubblicità (non usati attualmente).</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Gestione dei Cookie</h2>
      <p className="mb-4">
        Puoi controllare e/o eliminare i cookie come desideri. Puoi cancellare tutti i cookie già presenti sul tuo dispositivo e impostare la maggior parte dei browser per bloccarne l'installazione.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contatti</h2>
      <p>
        Per ulteriori informazioni sulla nostra gestione dei cookie, puoi contattarci a: <a href="mailto:thevikingoftheweb@gmail.com" className="text-blue-600 underline">thevikingoftheweb@gmail.com</a>.
      </p>
    </div>
  );
};

export default CookiePolicy;

