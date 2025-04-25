import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo i dati personali degli utenti che visitano il nostro sito web.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Titolare del trattamento</h2>
      <p className="mb-4">
        Il titolare del trattamento dei dati è Salvatore Di Maria. Per qualsiasi richiesta puoi contattarci via email a: <a href="mailto:thevikingoftheweb@gmail.com" className="text-blue-600 underline">thevikingoftheweb@gmail.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Dati raccolti</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Dati di navigazione:</strong> informazioni raccolte automaticamente come indirizzi IP, tipo di browser e pagine visitate.</li>
        <li><strong>Dati forniti volontariamente:</strong> informazioni inserite nei form di contatto o nei commenti, come nome e indirizzo email.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Finalità del trattamento</h2>
      <p className="mb-4">
        I dati raccolti vengono utilizzati esclusivamente per:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Rispondere alle richieste degli utenti</li>
        <li>Migliorare l'esperienza di navigazione</li>
        <li>Adempiere a obblighi di legge</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Conservazione dei dati</h2>
      <p className="mb-4">
        I dati saranno conservati per il tempo strettamente necessario a raggiungere le finalità indicate, salvo diversi obblighi di legge.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Condivisione dei dati</h2>
      <p className="mb-4">
        I tuoi dati non saranno ceduti a terze parti senza il tuo consenso, salvo nei casi previsti dalla legge.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Diritti dell'utente</h2>
      <p className="mb-4">
        In qualsiasi momento puoi esercitare i diritti previsti dal GDPR, inclusi l'accesso, la rettifica, la cancellazione e l'opposizione al trattamento dei tuoi dati.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifiche alla Privacy Policy</h2>
      <p className="mb-4">
        Questa Privacy Policy può essere aggiornata. Ti invitiamo a consultarla periodicamente.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contatti</h2>
      <p>
        Per esercitare i tuoi diritti o ricevere maggiori informazioni, puoi scriverci a: <a href="mailto:thevikingoftheweb@gmail.com" className="text-blue-600 underline">thevikingoftheweb@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
