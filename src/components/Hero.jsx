import React, { useRef } from 'react'
import videoHero from '../assets/video/fidexherovideo.mp4'
import logo from '../assets/logo.png'
import fallbackImg from '../assets/photos/about/photoLocalFidex2.jpeg'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useWindowWidth } from '../utils/useWindowWidth'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const currWidth = useWindowWidth();
  const { t } = useTranslation(); // Initialisation de i18next

  useGSAP(() => {
    if (currWidth < 768) return;
  
    gsap.fromTo(
      bgRef.current,
      { y: "-20%" },
      {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [currWidth]);
  
  
  return (
    <section ref={containerRef} className="flex items-center justify-center bg-transparent relative h-screen w-screen mb-10">
    <div className="flex flex-col md:grid max-w-full xl:grid-cols-2 md:grid-cols-3 pt-10">

      {/* Partie Gauche/Bas(mobile) : Texte - description - boutons CTA */}
      <div className="md:h-screen flex flex-col xl:col-span-1 md:col-span-2 items-center justify-center md:order-1 order-2 md:px-10">
        <div className="md:max-w-2xl">
          {/* Titre & description */}
          <div className="flex flex-col justify-center md:text-start text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none lg:text-7xl md:text-5xl text-white">
              {t("homepage.heroSection.title")}
            </h1>
            <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">
              {t("homepage.heroSection.description")}
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex md:flex-row flex-col items-center md:gap-0 gap-2">
            <Link to="contacts" className="justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-white hover:bg-red-800 hover:text-white flex items-center gap-2 hover:gap-3 transition-all">
              {t("homepage.heroSection.cta1")}
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
            <Link to="about" className="justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-red-800 hover:text-white flex items-center gap-2 hover:gap-3 transition-all">
              {t("homepage.heroSection.cta2")}
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Partie Droite/Haut(mobile) : Logo */}
      <div className="flex flex-col col-span-1 h-full items-center justify-center md:order-2 order-1 md:h-screen">
        <img src={logo} alt="logo fidex" className="object-cover xl:h-2/6 md:max-w-full max-w-1/2 md:p-5 xl:p-0" />
      </div>
    </div>

    {/* Vidéo */}
    <div ref={bgRef} className="absolute w-screen inset-0 -z-10 overflow-hidden">
      <div className="absolute h-full w-full bg-black opacity-40"></div>
      <video autoPlay loop muted preload="auto" className="w-[100vw] pointer-events-none object-cover h-[110%] -mt-10" playsInline={true}>
        <source src={videoHero} type="video/mp4" />
        <img src={fallbackImg} title="Your browser does not support the <video> tag" />
      </video>
    </div>
  </section>
  )
}


export default Hero;