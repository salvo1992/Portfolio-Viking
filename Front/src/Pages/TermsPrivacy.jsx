import React from "react";
import { Link } from "react-router-dom";

const TermsPrivacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Termini di Servizio e Privacy</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Termini di Utilizzo</h2>
      <p className="mb-4">
        Utilizzando questo sito, accetti di rispettare i presenti termini. I contenuti del sito sono protetti da copyright e non possono essere copiati o distribuiti senza autorizzazione.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Protezione dei Dati</h2>
      <p className="mb-4">
        I dati raccolti tramite il form contatti sono utilizzati esclusivamente per rispondere alle richieste degli utenti. Non condividiamo i tuoi dati con terze parti senza il tuo consenso.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sicurezza</h2>
      <p className="mb-4">
        Adottiamo misure di sicurezza adeguate per proteggere i dati personali da accessi non autorizzati o divulgazioni.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Modifiche ai Termini</h2>
      <p className="mb-4">
        Ci riserviamo il diritto di modificare i presenti termini in qualsiasi momento. Eventuali modifiche saranno pubblicate su questa pagina.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contatti</h2>
      <p>
        Per domande sui Termini o sulla Privacy, contattaci via email:{" "}
        <a href="mailto:thevikingoftheweb@gmail.com" className="text-blue-600 underline">
          thevikingoftheweb@gmail.com
        </a>.
      </p>

      {/* CTA per tornare alla Home */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <Link
          to="/"
          className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Naviga ora
        </Link>
        <Link
          to="/"
          className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
        >
          Visita il sito
        </Link>
      </div>
    </div>
  );
};

export default TermsPrivacy;


