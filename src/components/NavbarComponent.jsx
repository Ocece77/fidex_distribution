import {
  faCommentAlt,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "../utils/useWindowWidth";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import AppNavLink from "./AppNavLink";
import { Link, useLocation } from "react-router-dom";
import about from "../assets/photos/home/about4.jpg"
import livraison from '../assets/photos/livraison/livraison8.jpg'
import exploitation from '../assets/photos/exploitationminiere/exploitation2.jpg'
import expedition from '../assets/photos/expedition/expedition1.jpeg'
import vehicule from '../assets/photos/vehicules/vehicule2.jpg'



const information = {
  "fidexdistribution@gmail.com": faEnvelope,
  "Urban Committee 5-C, Kinshasa-Gombe": faLocationDot,
};

const styles = {
  borderRight: "1px solid rgba(255, 255, 255 , 0.7)",
};

const menuItems = [
  {
    title: "à propos",
    description: "Découvrez notre histoire, nos valeurs et l’équipe qui bâtit Fidex chaque jour.",
    img: about,
    links: [
      { label: "Notre Histoire", href: "/about" },
      { label: "Nous rencontrer", href: "/contacts" },
    ],
  },
  {
    title: "véhicules",
    description: "Parcourez notre gamme de véhicules robustes pour l’industrie et l’expédition.",
    img: vehicule,
    links: [
      { label: "Tous nos véhicules", href: "/vehicules" },
      { label: "Pick-up", href: "/vehicules/pickup" },
      { label: "SUV & Mini Van", href: "/vehicules/suv" },
      { label: "4x4", href: "/vehicules/4x4" },
    ],
  },
  {
    title: "livraisons",
    description: "Suivez vos colis en temps réel ou estimez le coût de votre prochaine livraison.",
    img: livraison,
    links: [
      { label: "Découvrir notre service", href: "/livraison" },
      { label: "Suivi", href: "/livraison/suivi" },
      { label: "Estimation de coût", href: "/livraison/estimation" },
    ],
  },
  {
    title: "expéditions",
    description: "Explorez nos solutions d’expédition, garanties et pays couverts.",
    img: expedition,
    links: [
      { label: "Découvrir nos services", href: "/expedition" },
      { label: "Garantie", href: "/expedition/garantie" },
    ],
  },
  {
    title: "Exploitation Minière",
    description: "Achetez des concessions, découvrez nos engagements et les minerais disponibles.",
    img: exploitation,
    links: [
      { label: "Achat de concessions", href: "/exploitation_miniere" },
      { label: "Nos engagements", href: "/exploitation_miniere/engagements" },
      { label: "Minerais vendus", href: "/exploitation_miniere/minerais" },
    ],
  },

];

const NavbarComponent = () => {

  const {pathname} = useLocation();
  const currScreenWidth = useWindowWidth(); 
  const isVehiculePath = pathname.startsWith("/vehicules");
  const [navLinkColor , setNavLinkColor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const dropdownRef = useRef(null);
  const NavbarCollapseRef = useRef(null);

  // Initialisation propre (évite flash de style)
  const [barStyle, setBarStyle] = useState(
    isVehiculePath || currScreenWidth < 768
      ? "bg-primary text-white"
      : "bg-transparent text-white border-b-1"
  );
  const [navStyle, setNavStyle] = useState(
    isVehiculePath || currScreenWidth < 768
      ? "bg-white shadow-md"
      : "bg-transparent text-white"
  );

  //ouvrir le sous-menu
  const toggleMenu = (index) => {
    const isOpening = activeMenu !== index;
    setActiveMenu(isOpening ? index : null);
    console.log(activeMenu)
  };

  //fermer la navbar sur tablette et mobile lors d'un click sur un lien
  const toggleNav = () =>{
    NavbarCollapseRef.current.classList.add("hidden")
  }



  // Fermer menu si clic à l’extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Gérer les styles dynamiques selon scroll, menu et page
  useEffect(() => {
    const updateNavStyle = () => {
      const scrolled = window.scrollY > 50;
      const menuOpen = activeMenu !== null;
      const isMobile = currScreenWidth < 768;
  
      if (isVehiculePath || isMobile) {
        // toujours un style fixe sur mobile ou la page véhicules
        setBarStyle("bg-primary text-white");
        setNavStyle("bg-white shadow-md");
        setNavLinkColor('text-white');
      } else if (scrolled || menuOpen) {
        // si on scrolle ou ouvre un menu sur desktop non-vehicule
        setBarStyle("bg-primary text-white");
        setNavStyle("bg-white shadow-md");
        setNavLinkColor('text-neutral-900');
      } else {
        // état initial transparent
        setBarStyle("bg-transparent text-white border-b-1");
        setNavStyle("bg-transparent text-white");
        setNavLinkColor('text-white');
      }
    };
  
    updateNavStyle(); // appeler directement au montage
    window.addEventListener("scroll", updateNavStyle);
    return () => window.removeEventListener("scroll", updateNavStyle);
  }, [activeMenu, pathname, currScreenWidth, isVehiculePath]);
  
  
  return (
    <div className="fixed inset-x-0 z-9999">
      {/* Barre info top */}
      <div className={`flex justify-between items-center md:px-4 px-2 py-1.5 ${barStyle}`}>
        <div className="flex flex-col md:flex-row md:gap-2">
          {Object.entries(information).map(([key, val], i) => (
            <div
              key={i}
              className="flex gap-1.5 text-[10px] md:text-sm pr-4"
              style={{
                borderRight: `${
                  i === 0 && currScreenWidth > 768 ? styles.borderRight : "none"
                }`,
              }}
            >
              <FontAwesomeIcon color="#8A0008" icon={val} size="lg" />
              <p>{key}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-5  items-center justify-center">

          <Dropdown
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="font-light text-[10px] md:text-sm">
                Français <FontAwesomeIcon icon={faChevronRight} size="sm" className="rotate-90" />
              </span>
            )}
          >
            <DropdownItem className="text-[10px] md:text-sm">English</DropdownItem>
            <DropdownItem className="text-[10px] md:text-sm">Français</DropdownItem>
          </Dropdown>
        </div>
      </div>

      {/* Barre principale */}
      <Navbar fluid className={`${navStyle} py-1`}>
        <NavbarBrand href="/">
          <img src={logo} className="lg:h-20 h-12 object-cover" alt="Fidex Logo" />
        </NavbarBrand>

        <div className="md:flex md:gap-3 items-center">
          <div className="flex md:order-2">
            <Button className="hidden md:flex hover:bg-red-900 bg-red-800 font-bold gap-3 py-6 transition-all ">
              <FontAwesomeIcon icon={faCommentAlt} size="lg" />
              <p>
                Parler à un expert <br /> +233 1 23 45 67
              </p>
            </Button>
            <NavbarToggle />
          </div>

          {/* Desktop menu */}
          <div
            className="hidden md:flex list-none lg:gap-6 gap-2 lg:text-[14px] text-[12px] "
            ref={dropdownRef}
          >
            <AppNavLink to="/" texte="Accueil" className={navLinkColor}/>
     
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col items-start ">
                <button
                  onClick={() => toggleMenu(index)}
                  className={`capitalize text-sm font-medium transition duration-200 border-b-2 ${
                    activeMenu === index
                      ? "border-red-700 text-red-800"
                      : "border-transparent"
                  }`}
                >
                  {item.title}
                </button>

                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 w-screen z-50 bg-white shadow-lg lg:pb-16 py-10 px-8 grid grid-cols-3"
                    >
                      <div className="border-r border-gray-300 px-5 text-dark-primary text-lg">
                         {item.description}
                      </div>
                      
                      
                        <div className="grid grid-cols-1 gap-6 text-sm text-gray-700 ps-5  h-fit">
                          {item.links.map((link, idx) => (
                            <Link
                              key={idx}
                              to={link.href}
                              className="hover:text-primary text-[16px] flex items-center gap-2 hover:gap-3 transition-all"
                              onClick={() => toggleMenu(index)}>
                              {link.label}
                              <FontAwesomeIcon icon={faChevronRight} size="xs" />
                            </Link>
                          ))}
                        </div>
                  

                      <div className="border-l border-gray-300">
                        <img
                          src={item.img}
                          className="img-fluid rounded w-100 h-50 object-cover ps-5"
                          alt={item.title}
                        />
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <NavbarCollapse ref={NavbarCollapseRef} className="relative md:hidden">
          
        <div className="flex mb-4 items-center capitalize font-medium cursor-pointer gap-2 hover:gap-3 text-red-700 hover:text-red-800 transition-all ">
            <Link 
            to="/">Accueil
              </Link>
          </div>

          {menuItems.map((item, i) => (
            <div key={i} className="mb-2">
              <details className="group flex flex-col gap-3">
                <summary className="flex items-center capitalize font-medium cursor-pointer gap-2 hover:gap-3 hover:text-red-800 transition-all ">
                  {item.title}
                  <FontAwesomeIcon icon={faChevronRight} size="sm" />
                </summary>
                <ul className="flex flex-col gap-2 pl-4 space-y-1 text-sm">
                  {item.links.map((link, j) => (
                    <li key={j}>
                      <Link to={link.href} 
                      className="hover:text-red-800 transition-all"    
                      onClick={()=>{toggleNav()}}        
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
      
              </details>
          </div>
          ))}

          <div  className="flex items-center capitalize font-medium cursor-pointer gap-2 hover:gap-3 hover:text-red-800 transition-all ">
            <Link 
            to="/contacts">
              Nous contacter
              </Link>
              <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div>

          
          <div className="absolute bg-neutral-600 opacity-50 h-screen w-[110vw] -left-10 -z-10" />
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
