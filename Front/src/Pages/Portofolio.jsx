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
import { Code, Award, Boxes } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}>
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: { xs: 1, sm: 3 } }}><Typography>{children}</Typography></Box>}
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

const projects = [
  {
    id: "0",
    Img: "/projects/bb-toscana.png",
    Title: "bed-and-breakfast-app",
    Description: "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://bed-and-breakfast-app.vercel.app/",
    Github: "https://github.com/salvo1992/v0-b-and-b-management-app",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali"
    ]
  },
   {
    id: "0.5",
    Img: "/projects/bb-roma.png",
    Title: "bed-and-breakfast-app roma",
    Description: "App B&B , sviluppata in React con funzione  integrate e i servizi dedicati nel mondo dei B&B.",
    Link: "https://roma-bb.vercel.app/",
    Github: "https://github.com/salvo1992/b-b-roma",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca delle camere",
      "prenotazioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "contatto diretto con la struttura  per dati in tempo reale e prenotazioni di pacchetti speciali"
    ]
  },

  {
    id: "1",
    Img: "/projects/Weather-app.png",
    Title: "Weather App",
    Description: "App meteo con ricerca per città, sviluppata in React con API meteo integrate.",
    Link: "https://weather-app.salvo1992.netlify.app",
    Github: "https://github.com/salvo1992/weather-app",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricerca meteo per città",
      "Visualizzazione previsioni orarie e giornaliere",
      "Interfaccia utente reattiva e intuitiva",
      "Utilizzo di API meteo per dati in tempo reale"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: "7",
    Img: "/projects/wedding.jpg",
    Title: "Wedding Snap Story",
    Description: "Album di nozze digitale con caricamento istantaneo delle foto degli invitati.",
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
    ]
  },
  {
    id: "8",
    Img: "/projects/cooking.png",
    Title: "Cooking App",
    Description: "App per cucinare con filtri intelligenti, pianificazione pasti e lista condivisa.",
    Link: "https://cooking-app-viking.netlify.app",
    Github: "https://github.com/salvo1992/cooking-app",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Ricette personalizzate in base al profilo",
      "Pianificazione settimanale dei pasti",
      "Lista della spesa condivisa",
      "Modalità Cucina con Timer integrati",
      "Sezione Community per scambiarsi ricette",
      "Integrazione con servizi di consegna"
    ]
  },
  {
    id: "9",
    Img: "/projects/static.jpg",
    Title: "Calcolo Social Statistic",
    Description: "Analisi delle statistiche dei profili social per influencer e brand.",
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
    ]
  },
  {
    id: "10",
    Img: "/projects/lunaria.png",
    Title: "LunariaChandler",
    Description: "Sito e branding per candele artigianali con colori personalizzati e QR promozionale.",
    Link: "https://lunariachandler.netlify.app",
    Github: "Private",
    TechStack: ["React", "Tailwind"],
    Features: [
      "Sito promozionale elegante",
      "Catalogo prodotti Candele",
      "Creazione di candele personalizzate",

    ]
  },
  {
    id: "11",
    Img: "/projects/badge.png",
    Title: "Software Badge App",
    Description: "App per gestione badge dei dipendenti, QR scanner e statistiche lavorative.",
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
    ]
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
    ]
  }
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
    localStorage.setItem("projects", JSON.stringify(projects));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{ color: '#6366f1', backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", position: "relative", overflow: "hidden" }} className="md:px-4">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{ minHeight: "70px", "& .MuiTab-root": { fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: "600", color: "#94a3b8", textTransform: "none" }, "& .MuiTabs-indicator": { height: 0 }, "& .MuiTabs-flexContainer": { gap: "8px" } }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award className="mb-2 w-5 h-5" />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div key={project.id || index} data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate(`/projects/${project.id}`)} className="cursor-pointer">
                    <CardProject {...project} />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore('projects')} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

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
                <ToggleButton onClick={() => toggleShowMore('certificates')} isShowingMore={showAllCertificates} />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
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


