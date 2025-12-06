import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Folder, FolderOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
  { icon: "netlify.svg", language: "Netlify" },
  { icon: "git.png", language: "Git" },
  { icon: "github.png", language: "Github" },
  { icon: "Figma-logo.png", language: "Figma" },
  { icon: "threejs-1.svg", language: "Three.js" },
  { icon: "logo-wordmark.svg", language: "Expo" },
  { icon: "mongodb.svg", language: "MongoDB" },
  { icon: "expressjs-ar21~bgwhite.svg", language: "Express" },
  { icon: "ts.svg", language: "TypeScript" },
  { icon: "py.png", language: "Python" },
  { icon: "mysql.svg", language: "MySQL" },
  { icon: "nextjs.svg", language: "Next.js" },
  { icon: "docker.svg", language: "Docker" },
  { icon: "postman.svg", language: "Postman" },
  { icon: "java.svg", language: "Java" },
  { icon: "c.jpg", language: "C" },
  { icon: "aws.svg", language: "AWS" },
  { icon: "php.svg", language: "PHP" },
  { icon: "laravel.svg", language: "Laravel" },
  { icon: "sql.jpg", language: "SQL" },
  { icon: "angular.svg", language: "Angular" },
  { icon: "vuejs.svg", language: "Vue.js" },
];

const certificates = [
  { Img: "/certificati/Certificazione in web developer full stack.png" },
  { Img: "/certificati/PYTHON.png" },
  { Img: "/certificati/certificazione IA.png" },
  { Img: "/certificati/corso IA 3.png" },
  { Img: "/certificati/certificato IA 4.png" },
  { Img: "/certificati/cyber.png" },
];

// 🔹 categorie “cartelle” per i progetti (incluse quelle future)
const projectCategories = [
  "B&B",
  "Concessionarie",
  "Siti di previsione",
  "Utili e intuitivi",
  "Gestionali / Dashboard",
  "Ecommerce",
  "Bar e Ristorazione",
  "Eventi & Wedding",
  "Social / Community",
  "Didattica / Educational",
  "Games & Altro",
  "App mobile / Expo",
  "Travel & Turismo",
];

// 🔹 meta per logo/emoji e colore per ogni categoria
const categoryMeta = {
  "B&B": { emoji: "🏨", accent: "from-blue-500 to-cyan-400" },
  Concessionarie: { emoji: "🚗", accent: "from-amber-500 to-orange-500" },
  "Siti di previsione": { emoji: "🌦️", accent: "from-sky-500 to-indigo-500" },
  "Utili e intuitivi": { emoji: "🧠", accent: "from-emerald-500 to-teal-400" },
  "Gestionali / Dashboard": { emoji: "📊", accent: "from-purple-500 to-pink-500" },
  Ecommerce: { emoji: "🛒", accent: "from-fuchsia-500 to-rose-500" },
  "Bar e Ristorazione": { emoji: "☕", accent: "from-orange-500 to-red-500" },
  "Eventi & Wedding": { emoji: "💍", accent: "from-rose-500 to-pink-500" },
  "Social / Community": { emoji: "🌐", accent: "from-cyan-500 to-blue-500" },
  "Didattica / Educational": { emoji: "📚", accent: "from-lime-500 to-emerald-500" },
  "Games & Altro": { emoji: "🎮", accent: "from-indigo-500 to-violet-500" },
  "App mobile / Expo": { emoji: "📱", accent: "from-slate-500 to-slate-300" },
  "Travel & Turismo": { emoji: "✈️", accent: "from-teal-500 to-cyan-400" },
};

const projects = [
  {
    id: "0",
    Img: "/projects/bb-toscana.png",
    Title: "bed-and-breakfast-app",
    Description:
      "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://bed-and-breakfast-app.vercel.app/",
    Github: "https://github.com/salvo1992/v0-b-and-b-management-app",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali",
    ],
    category: "B&B",
  },
  {
    id: "0.5",
    Img: "/projects/bb-roma.png",
    Title: "bed-and-breakfast-app roma",
    Description:
      "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://roma-bb.vercel.app/",
    Github: "https://github.com/salvo1992/b-b-roma",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali",
    ],
    category: "B&B",
  },
  {
    id: "0.7",
    Img: "/projects/mare-e-sabbia.png",
    Title: "Mare & Sabbia",
    Description:
      "App per ristorazione , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo della ristorazione .",
    Link: "https://mareesabbia.vercel.app/",
    Github: "https://github.com/salvo1992/restaurant-website-design",
    TechStack: ["React", "Tailwind"],
    Features: [
      "prenotazione tavoli",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali",
      "Esperienza Romantica in un oceano di piacere ",
    ],
    category: "Bar e Ristorazione",
  },
  {
    id: "1",
    Img: "/projects/Weather-app.png",
    Title: "Weather App",
    Description:
      "App meteo con ricerca per città, sviluppata in React con API meteo integrate.",
    Link: "https://weather-app.salvo1992.netlify.app",
    Github: "https://github.com/salvo1992/weather-app",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca meteo per città",
      "Visualizzazione previsioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "Utilizzo di API meteo per dati in tempo reale",
    ],
    category: "Siti di previsione",
  },
  {
    id: "1.5",
    Img: "/projects/rifugio-alpino.png",
    Title: "b&b.rifugio alpino",
    Description:
      "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://rifugio-alpino.vercel.app/",
    Github: "https://github.com/salvo1992/rifugio-alpino",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali",
    ],
    category: "B&B",
  },
  {
    id: "1.7",
    Img: "/projects/CasaPortofiornia.png",
    Title: "b&b.CasaPortofiornia",
    Description:
      "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://casa-portofiornia.vercel.app/",
    Github: "https://github.com/salvo1992/casa-portofiornia",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali",
    ],
    category: "B&B",
  },
  {
    id: "2",
    Img: "/projects/book.png",
    Title: "BOOK-Writer",
    Description: "Applicazione per scrittori con salvataggio automatico e struttura a capitoli.",
    Link: "https://book-writer01.netlify.app",
    Github: "Private",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Editor avanzato per la scrittura",
      "Organizzazione capitoli",
      "Esportazione PDF",
      "Editor rich text",
      "Salvataggio automatico",
      "Interfaccia utente reattiva",
      "Creazione di libri e romanzi",
    ],
    category: "Utili e intuitivi",
  },
  {
    id: "3",
    Img: "/projects/Camel.jpg",
    Title: "CamelNetwork",
    Description: "Piattaforma di networking decentralizzato per creator e sviluppatori.",
    Link: "https://camelnetwork.netlify.app",
    Github: "Private",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Social network innovativo",
      "Feed personalizzato per sviluppatori",
      "Blog e repository condivisi",
      "Interfaccia utente reattiva",
      "Sistema di like e commenti",
      "Funzionalità di ricerca avanzata",
    ],
    category: "Social / Community",
  },
  {
    id: "4",
    Img: "/projects/qr.jpg",
    Title: "Generatore di QR",
    Description: "Sito per creare, scaricare e gestire QR Code personalizzati.",
    Link: "https://generatoreqr.netlify.app",
    Github: "https://github.com/salvo1992/qr-generator",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Generazione QR Code personalizzati",
      "Download in vari formati",
      "Design dinamico e personalizzabile",
      "QR Code da link o testo",
    ],
    category: "Utili e intuitivi",
  },
  {
    id: "5",
    Img: "/projects/BANNER BIM.png",
    Title: "IL Bim",
    Description: "App didattica per visualizzare modelli BIM 3D online.",
    Link: "https://ilbimweb.netlify.app/home",
    Github: "Private",
    TechStack: ["React", "Three.js"],
    Features: [
      "Visualizzazione modelli BIM 3D",
      "Interfaccia utente reattiva",
      "Navigazione intuitiva",
      "Integrazione con librerie 3D",
      "Supporto per vari formati di file",
    ],
    category: "Didattica / Educational",
  },
  {
    id: "6",
    Img: "/projects/quiz.png",
    Title: "Quiz The Viking",
    Description: "Gioco quiz rapido con timer e condivisione social integrata.",
    Link: "https://quiztheviking.netlify.app",
    Github: "https://github.com/salvo1992/quiz-the-viking",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Gioco quiz con timer",
      "Interfaccia accattivante",
      "Funzionalità social per condivisione risultati",
      "Domande da API trivia",
      "Sistema di punteggio",
      "Modalità di gioco veloce",
      "Statistiche di gioco",
      "Design reattivo",
    ],
    category: "Games & Altro",
  },
  {
    id: "7",
    Img: "/projects/wedding.jpg",
    Title: "Wedding Snap Story",
    Description:
      "Album di nozze digitale con caricamento istantaneo delle foto degli invitati.",
    Link: "https://wedding-snap-story.netlify.app",
    Github: "Private",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Album condiviso per matrimoni",
      "Caricamento foto da parte degli invitati",
      "Collezioni di momenti speciali",
      "Calendario nozze",
      "Sezione social per interazioni",
      "Design reattivo",
      "Funzionalità di ricerca",
      "Integrazione con social media",
      "Sistema di notifiche",
      "Funzione di commento e like",
      "Creazione di eventi personalizzati",
    ],
    category: "Eventi & Wedding",
  },
  {
    id: "8",
    Img: "/projects/cooking.png",
    Title: "Cooking App",
    Description:
      "App per cucinare con filtri intelligenti, pianificazione pasti e lista condivisa.",
    Link: "https://cooking-app-viking.netlify.app",
    Github: "https://github.com/salvo1992/cooking-app",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricette personalizzate in base al profilo",
      "Pianificazione settimanale dei pasti",
      "Lista della spesa condivisa",
      "Modalità Cucina con Timer integrati",
      "Sezione Community per scambiarsi ricette",
      "Integrazione con servizi di consegna",
    ],
    category: "Utili e intuitivi",
  },
  {
    id: "9",
    Img: "/projects/static.jpg",
    Title: "Calcolo Social Statistic",
    Description:
      "Analisi delle statistiche dei profili social per influencer e brand.",
    Link: "https://calcolo-social-statistic.netlify.app",
    Github: "Private",
    TechStack: ["React", "Chart.js"],
    Features: [
      "Analisi statistiche social",
      "Visualizzazione grafica dei dati",
      "Interfaccia utente reattiva",
      "Integrazione con API social",
      "Funzionalità di esportazione report",
      "Sistema di filtri avanzati",
    ],
    category: "Gestionali / Dashboard",
  },
  {
    id: "10",
    Img: "/projects/lunaria.png",
    Title: "LunariaChandler",
    Description:
      "Sito e branding per candele artigianali con colori personalizzati e QR promozionale.",
    Link: "https://lunariachandler.netlify.app",
    Github: "Private",
    TechStack: ["React", "Tailwind"],
    Features: ["Sito promozionale elegante", "Catalogo prodotti Candele", "Creazione di candele personalizzate"],
    category: "Ecommerce",
  },
  {
    id: "11",
    Img: "/projects/badge.png",
    Title: "Software Badge App",
    Description:
      "App per gestione badge dei dipendenti, QR scanner e statistiche lavorative.",
    Link: "https://software-badge-app.netlify.app",
    Github: "Private",
    TechStack: ["React", "Expo"],
    Features: [
      "Gestione badge dipendenti",
      "QR scanner per accessi",
      "Statistiche lavorative",
      "Dashboard direzionale",
      "Sistema di notifiche",
      "Integrazione con API esterne",
      "Funzionalità di ricerca avanzata",
      "Design reattivo",
      "Sistema di reportistica",
      "Funzione di esportazione dati",
      "Integrazione con servizi di terze parti",
      "Gestione utenti e permessi",
    ],
    category: "Gestionali / Dashboard",
  },
  {
    id: "12",
    Img: "/projects/mate.png",
    Title: "Matematic Project",
    Description: "App educativa per studenti con esercizi progressivi di matematica.",
    Link: "https://matematic-project.onrender.com",
    Github: "https://github.com/salvo1992/matematic-project",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Esercizi di matematica per ragazzi",
      "risoluzione di problemi",
      "Calcolatore di espressioni",
    ],
    category: "Didattica / Educational",
  },
  {
    id: "13",
    Img: "/projects/al22.png",
    Title: "AL 22 Suite & SPA LUXURY EXPERIENCE",
    Description:
      "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://polignano-a-mare.vercel.app/",
    Github: "https://github.com/salvo1992/Polignano-a-Mare",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali",
    ],
    category: "B&B",
  },
  {
    id: "14",
    Img: "/projects/all22suite.png",
    Title: "b&b.al22suite",
    Description:
      "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://al22.vercel.app/",
    Github: "https://github.com/salvo1992/Al22",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali",
    ],
    category: "B&B",
  },
  {
    id: "15",
    Img: "/projects/barstazionediparma.png",
    Title: "bar stazione di parma.",
    Description:
      "App per bar  , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei bar.",
    Link: "https://barstazionediparma.vercel.app/",
    Github: "https://github.com/salvo1992/barstazionediparma",
    TechStack: ["React", "Tailwind"],
    Features: [
      "storia del bar",
      "orari di apertura  e fascie  giornaliere",
      "Interfaccia reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale anche per le info per eventuali colloqui di lavoro",
    ],
    category: "Bar e Ristorazione",
  },
  {
    id: "16",
    Img: "/projects/essenzacampo.png",
    Title: "essenza campo",
    Description:
      "App ecommerce , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo del ecommerce e la vendita di articoli sportivi .",
    Link: "https://essenzacampo.vercel.app/",
    Github: "https://github.com/salvo1992/ESSENZACAMPO",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca degli articoli",
      "prenotazioni di prodotti sportivi",
      "Interfaccia utente reattiva e intuitiva",
      "contatto per info su costi di personalizzazione dei prodotti e di pacchetti speciali",
    ],
    category: "Ecommerce",
  },
  {
    id: "17",
    Img: "/projects/elitemotors.png",
    Title: "Elite Motors",
    Description:
      "App concessionari , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei concessionari.",
    Link: "https://elitemotors1.vercel.app/",
    Github: "https://github.com/salvo1992/elite-motors",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca dei veicoli",
      "prenotazioni orarie e giornaliere dei test drive",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali , acquisto veicoli e noleggio a lungo termine ",
    ],
    category: "Concessionarie",
  },
  {
    id: "18",
    Img: "/projects/oceandrive.png",
    Title: "concessionari.OceanDrive",
    Description:
      "App concessionari , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei concessionari.",
    Link: "https://al22.vercel.app/",
    Github: "https://github.com/salvo1992/Oceandrivee",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca dei veicoli",
      "prenotazioni orarie e giornaliere dei test drive",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali , acquisto veicoli e noleggio a lungo termine ",
    ],
    category: "Concessionarie",
  },
  {
    id: "19",
    Img: "/projects/heritagemotors.png",
    Title: "concessionari.HeritageMotors",
    Description:
      "App concessionari , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei concessionari.",
    Link: "https://heritagemotors.vercel.app/",
    Github: "https://github.com/salvo1992/heritagemotors",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca dei veicoli",
      "prenotazioni orarie e giornaliere dei test drive",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali , acquisto veicoli e noleggio a lungo termine ",
    ],
    category: "Concessionarie",
  },
  {
    id: "20",
    Img: "/projects/pronostici.png",
    Title: "lo zio della previsione",
    Description:
      "App Siti di previsione , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei Siti di previsione.",
    Link: "https://www.ipronosticidipitagora.com/",
    Github: "https://github.com/salvo1992/v0-gambling-website-development",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle previsioni",
      "sezione dedicata ai pronostici",
      "Interfaccia utente reattiva e intuitiva",
      "possibilita di vedere vechi e nuovi pronostici  e dati in tempo reale e visualizzazioni di reel di pitagora ",
    ],
    category: "Siti di previsione",
  },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // categoria selezionata (cartella aperta)
  const [selectedCategory, setSelectedCategory] = useState(
    projectCategories[0] || null
  );

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
    localStorage.setItem("projects", JSON.stringify(projects));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  }, []);

  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  const projectsInSelected = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : [];

  const displayedProjects = showAllProjects
    ? projectsInSelected
    : projectsInSelected.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
              },
              "& .MuiTabs-indicator": { height: 0 },
              "& .MuiTabs-flexContainer": { gap: "8px" },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* 🔹 Tab PROGETTI – cartelle come piccole card + griglia progetti sotto */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* griglia di cartelle piccole */}
            <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                {projectCategories.map((category) => {
                  const categoryProjects = projects.filter(
                    (p) => p.category === category
                  );
                  const meta =
                    categoryMeta[category] || {
                      emoji: "📁",
                      accent: "from-slate-600 to-slate-500",
                    };
                  const isActive = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setSelectedCategory((prev) =>
                          prev === category ? category : category
                        )
                      }
                      className={`relative group rounded-2xl p-3 md:p-4 bg-[#050518]/80 border transition-all duration-200 flex flex-col items-start justify-between min-h-[110px] md:min-h-[130px] ${
                        isActive
                          ? "border-purple-500/70 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                          : "border-slate-800/80 hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(129,140,248,0.35)]"
                      }`}
                    >
                      {/* Icona cartella + glow */}
                      <div className="flex items-center justify-between w-full mb-3">
                        <div className="relative flex items-center justify-center">
                          {isActive ? (
                            <FolderOpen
                              className="w-6 h-6 md:w-7 md:h-7 text-purple-400 transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
                            />
                          ) : (
                            <Folder
                              className="w-6 h-6 md:w-7 md:h-7 text-slate-300 transition-transform duration-200 group-hover:scale-110 group-active:scale-95 group-hover:text-purple-300"
                            />
                          )}
                          <span className="absolute -z-10 w-7 h-7 rounded-full bg-purple-500/10 blur-md group-hover:bg-purple-500/25 transition-colors" />
                        </div>
                        <span className="text-[0.7rem] text-slate-500">
                          {categoryProjects.length} proj.
                        </span>
                      </div>

                      {/* Nome categoria */}
                      <div className="space-y-2">
                        <h3 className="text-slate-100 text-xs md:text-sm font-semibold text-left line-clamp-2">
                          {category}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 text-[0.6rem] md:text-[0.7rem] px-2 py-0.5 rounded-full bg-gradient-to-r ${meta.accent} text-white shadow-sm`}
                        >
                          <span>{meta.emoji}</span>
                          <span className="uppercase tracking-wide">
                            Categoria
                          </span>
                        </span>
                      </div>

                      {/* Bordino animato */}
                      <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-400/60 group-active:border-purple-500/80 transition-colors" />
                    </button>
                  );
                })}
              </div>

              {/* griglia progetti della cartella selezionata */}
              {selectedCategory && (
                <div className="mt-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
                        Progetti nella cartella
                      </p>
                      <h3 className="text-sm md:text-lg font-semibold text-slate-100">
                        {selectedCategory}{" "}
                        <span className="text-xs text-slate-500">
                          ({projectsInSelected.length})
                        </span>
                      </h3>
                    </div>

                    {projectsInSelected.length > initialItems && (
                      <ToggleButton
                        onClick={() => toggleShowMore("projects")}
                        isShowingMore={showAllProjects}
                      />
                    )}
                  </div>

                  {projectsInSelected.length === 0 ? (
                    <p className="text-slate-500 text-sm italic">
                      Nessun progetto ancora in questa categoria.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                      {displayedProjects.map((project, index) => (
                        <div
                          key={project.id || index}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          onClick={() =>
                            navigate(`/projects/${project.id}`)
                          }
                          className="cursor-pointer"
                        >
                          <CardProject {...project} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </TabPanel>

          {/* 🔹 Tab CERTIFICATI */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          {/* 🔹 Tab TECH STACK */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <TechStackIcon
                      TechStackIcon={stack.icon}
                      Language={stack.language}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
