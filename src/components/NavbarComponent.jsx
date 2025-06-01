import {
  faCommentAlt,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronRight,
  faLocationDot,
  faXmark,
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
import { useTranslation } from "react-i18next";

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
import { useDispatch, useSelector } from "react-redux";



const information = {
  "fidexdistribution@gmail.com": faEnvelope,
  "Urban Committee 5-C, Kinshasa-Gombe": faLocationDot,
};

const styles = {
  borderRight: "1px solid rgba(255, 255, 255 , 0.7)",
};



const NavbarComponent = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const language = useSelector(state => state.language.language);  // Récupère la langue depuis le store Redux

  // Fonction pour changer de langue
  const changeLanguage = (lng) => {
    
    // Mémoriser la langue dans le store Redux et dans localStorage
    dispatch({ type: 'SET_LANGUAGE', payload: lng });
    localStorage.setItem('language', lng);

    // Changer la langue dans i18next
    i18n.changeLanguage(lng);
  };

  // Lors du rechargement de la page, appliquer la langue mémorisée
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      dispatch({ type: 'SET_LANGUAGE', payload: savedLanguage });
      i18n.changeLanguage(savedLanguage);
    }
  }, [dispatch, i18n]);

  const menuItems = [
    {
      title: t('menu.about.title'),
      description: t('menu.about.description'),
      img: about, // Remplace par ton image
      links: [
        { label: t('menu.about.links.history'), href: "/about" },
        { label: t('menu.about.links.contact'), href: "/contacts" },
      ],
    },
    {
      title: t('menu.vehicles.title'),
      description: t('menu.vehicles.description'),
      img: vehicule, // Remplace par ton image
      links: [
        { label: t('menu.vehicles.links.all'), href: "vehicules/type/all" },
        { label: t('menu.vehicles.links.pickup'), href: "/vehicules/type/pickup" },
        { label: t('menu.vehicles.links.suv'), href: "/vehicules/type/suv" },
        { label: t('menu.vehicles.links.4x4'), href: "/vehicules/type/4x4" },
      ],
    },
    {
      title: t('menu.delivery.title'),
      description: t('menu.delivery.description'),
      img: livraison, // Remplace par ton image
      links: [
        { label: t('menu.delivery.links.service'), href: "/livraison" },
        { label: t('menu.delivery.links.tracking'), href: "/livraison/suivi" },
        { label: t('menu.delivery.links.estimate'), href: "/livraison/estimation" },
      ],
    },
    {
      title: t('menu.shipping.title'),
      description: t('menu.shipping.description'),
      img: expedition, // Remplace par ton image
      links: [
        { label: t('menu.shipping.links.services'), href: "/expedition" },
        { label: t('menu.shipping.links.warranty'), href: "/expedition/garanties" },
      ],
    },
    {
      title: t('menu.mining.title'),
      description: t('menu.mining.description'),
      img: exploitation, // Remplace par ton image
      links: [
        { label: t('menu.mining.links.buy'), href: "/exploitation_miniere" },
        { label: t('menu.mining.links.commitments'), href: "/exploitation_miniere/engagements" },
        { label: t('menu.mining.links.minerals'), href: "/exploitation_miniere/minerais" },
      ],
    }
  ];

  const {pathname} = useLocation();
  const currScreenWidth = useWindowWidth(); 
  const isVehiculePath = pathname.startsWith("/vehicules");
  const isLegalPath = pathname.startsWith("/legal");
  const [navLinkColor , setNavLinkColor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const dropdownRef = useRef(null);
  const NavbarCollapseRef = useRef(null);

  // Initialisation propre (évite flash de style)
  const [barStyle, setBarStyle] = useState(
    isVehiculePath || isLegalPath|| currScreenWidth < 768
      ? "bg-primary text-white"
      : "bg-transparent text-white border-b-1"
  );
  const [navStyle, setNavStyle] = useState(
    isVehiculePath || isLegalPath || currScreenWidth < 768
      ? "bg-white shadow-md"
      : "bg-transparent text-white"
  );

  //ouvrir le sous-menu
  const toggleMenu = (index) => {
    const isOpening = activeMenu !== index;
    setActiveMenu(isOpening ? index : null);
    console.log(activeMenu)
  };


  // État d'ouverture du menu mobile
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Fonction de fermeture
const closeMobileMenu = () => setIsMobileMenuOpen(false);

// Fermer en cliquant en dehors
useEffect(() => {
  const handleOutsideClick = (e) => {
    if (!e.target.closest("#mobileMenu") && isMobileMenuOpen) {
      closeMobileMenu();
    }
  };
  document.addEventListener("mousedown", handleOutsideClick);
  return () => document.removeEventListener("mousedown", handleOutsideClick);
}, [isMobileMenuOpen]);

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
  
      if (isVehiculePath || isLegalPath|| isMobile) {
        // toujours un style fixe sur mobile ou la page véhicules
        setBarStyle("bg-primary text-white");
        setNavStyle("bg-white shadow-md");
        setNavLinkColor('text-neutral-900');
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
  }, [activeMenu, pathname, currScreenWidth, isVehiculePath , isLegalPath]);
  
  
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
           <Link  className="font-light text-[10px] md:text-sm ">{t('menu.about.links.contact')}</Link>
          <Dropdown
            dismissOnClick={true}
            renderTrigger={() => (
              <span className="font-light text-[10px] md:text-sm capitalize flex gap-2 items-center">
                    {
               i18n.language == 'fr' ? "français" : "english"
             } <FontAwesomeIcon icon={faChevronRight} size="sm" className="rotate-90" />
              </span>
            )}
            className="flex-row-reverse"
          >
        
            <DropdownItem  onClick={() => changeLanguage("en")} className="text-[10px] md:text-sm ">English 🇬🇧</DropdownItem>
            <DropdownItem onClick={() => changeLanguage("fr")} className="text-[10px] md:text-sm">Français 🇫🇷</DropdownItem>
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
            <span itemProp="telephone">
              <a
                href="tel:+2331234567"
                className="hidden md:flex items-center text-white rounded-2xl hover:bg-red-900 bg-red-800 font-bold gap-3 py-2 px-3 text-sm transition-all"
              >
                <FontAwesomeIcon icon={faCommentAlt} size="lg" />
                <p>
                  {t("menu.contact.phone")} <br />
                  {t("menu.contact.phone_number")}
                </p>
              </a>
            </span>
            <NavbarToggle onClick={() => setIsMobileMenuOpen(true)} />
          </div>


          {/* Desktop menu */}
          <div
            className="hidden md:flex list-none lg:gap-6 gap-2 lg:text-[14px] text-[12px] "
            ref={dropdownRef}
          >
            <AppNavLink to="/" texte={t("menu.home")} className={navLinkColor}/>
     
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
        <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Menu coulissant */}
            <motion.div
              id="mobileMenu"
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-lg p-6 flex flex-col gap-5 overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Fermer bouton */}
              <button
                onClick={closeMobileMenu}
                className="text-red-800 self-end font-bold"
              >
                <FontAwesomeIcon icon={faXmark}/>
              </button>

              {/* Liens */}
              <Link to="/" onClick={closeMobileMenu} className="font-medium text-red-800 hover:ps-2 transition-all text-2xl">
                {t("menu.home")}
              </Link>

              {menuItems.map((item, i) => (
                <div key={i} className="border-r-6 border-neutral-200  ">
                  <p className="font-bold capitalize mb-2 text-2xl">{item.title}</p>
                  <ul className="pl-4 space-y-1 text-lg">
                    {item.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          to={link.href}
                          onClick={closeMobileMenu}
                          className="hover:text-red-800  ps-0 hover:ps-2 transition-all"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Link
                to="/contacts"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 text-2xl text-red-800  ps-0 hover:ps-2 transition-all"
              >
                {t("menu.about.links.contact")} <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      </Navbar>
    </div>
  );
};

export default NavbarComponent;
