import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderComponent from '../components/HeaderComponent'
import Map from '../components/Map'
import ContactSection from '../components/ContactSection'
import QuoteSection from '../components/QuoteSection'
import InfoSection from '../components/InfoSection'

import photo1 from '../assets/photos/about/photoLocalFidex2.jpeg'
import about1 from '../assets/photos/home/about2.jpg'
import about2 from '../assets/photos/home/about5.jpg'
import valeur3 from '../assets/photos/home/valeur3.jpeg'
import local1 from '../assets/photos/about/photoLocalFidex.jpeg'
import local2 from '../assets/photos/about/photoLocalFidex2.jpeg'
import local3 from '../assets/photos/about/photoLocalFidex3.jpeg'
import local4 from '../assets/photos/about/photoLocalFidex4.jpeg'
import local5 from '../assets/photos/about/photoLocalFidex5.jpeg'

import Reveal from '../animation/Reveal'
import { Link } from 'react-router-dom'
import gsap from 'gsap/all'
import { useInView } from 'framer-motion'

const About = () => {
  const { t } = useTranslation()
  const numberContainerRef = useRef();
  const isInView = useInView(numberContainerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const numbers = gsap.utils.toArray(".number");

      numbers.forEach((el) => {
        const endValue = parseInt(el.innerText);
        gsap.fromTo(el,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 1,
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              el.innerText = Math.floor(el.innerText);
            }
          }
        );
      });
    }
  }, [isInView]);

  return (
    <div className='grid grid-cols-1 gap-30'>
      <HeaderComponent
        titre={t("about.header.title")}
        backgroundImage={photo1}
        desc={t("about.header.description")}
        btns={{ [t("about.header.btn")]: "/contacts" }}
      />

      <Reveal>
        <div ref={numberContainerRef} className='grid lg:grid-cols-2 h-full gap-10 max-w-7xl mx-auto lg:px-20 px-2 py-20 bg-white'>
          <div className="flex flex-col gap-5 justify-center items-center lg:text-start text-center mx-auto max-w-2xl">
            <h1 className="lg:text-7xl text-5xl font-bold text-primary">
              {t("about.whoSection.title")}
            </h1>

            <div className='grid grid-cols-1 gap-5'>
              <p className="text-lg">{t("about.whoSection.paragraph1")}</p>
              <p className="text-lg">{t("about.whoSection.paragraph2")}</p>
              <p className="text-lg">{t("about.whoSection.paragraph3")}</p>
            </div>

            <div className="w-full flex lg:justify-start justify-center">
              <Link to="/contacts" className="flex items-center justify-center max-w-fit px-5 py-2 mr-3 text-sm font-medium text-center rounded-lg hover:bg-primary bg-red-800 text-white transition-all hover:gap-3 gap-2">
                {t("about.whoSection.btn")}
                <svg className="w-3 h-3 -mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </Link>
            </div>
          </div>

          <div className="flex lg:justify-end lg:pr-10 justify-center">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full lg:max-w-md text-center py-32">
              <div className="mb-8">
                <h2 className="text-6xl font-bold text-primary"><span className='number'>22</span> +</h2>
                <p className="text-gray-500 mt-2">{t("about.whoSection.stat1.desc")}</p>
              </div>
              <hr className="my-6 border-gray-200" />
              <div>
                <h2 className="text-6xl font-bold text-primary">+ de <span className='number'>4000</span> </h2>
                <p className="text-gray-500 mt-2">{t("about.whoSection.stat2.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <InfoSection
        img={about2}
        titre={t("about.strategySection.title")}
        desc={t("about.strategySection.description")}
        reversed={true}
        darkBg={true}
        btn={{ btnTitre: t("about.strategySection.btn"), btnLink: "/contacts" }}
      />

      <InfoSection
        img={valeur3}
        titre={t("about.valuesSection.title")}
        desc={t("about.valuesSection.description")}
        btn={{ btnTitre: t("about.valuesSection.btn"), btnLink: "/contacts" }}
      />

      <QuoteSection
        texte={t("about.quoteSection.text")}
        img={about1}
        isQuote={false}
      />

      <Reveal>
        <section className='flex justify-center '>
          <div className="grid grid-cols-1 gap-10 md:px-15 max-w-7xl">
            <div className="flex flex-col gap-5 text-center md:px-5 items-center">
              <h1 className="lg:text-6xl text-4xl font-bold text-primary">{t("about.officeSection.title")}</h1>
              <p className="font-light max-w-6xl">{t("about.officeSection.description")}</p>
            </div>

            <div className='grid md:grid-cols-2 gap-4 px-5'>
              <img className="h-auto max-w-full rounded-lg object-fill" src={local1} alt="image" />
              <img className="h-auto max-w-full rounded-lg" src={local2} alt="image" />
            </div>

            <div className='grid md:grid-cols-3 gap-4 px-5'>
              <img className="h-auto max-w-full rounded-lg" src={local3} alt="image" />
              <img className="h-auto max-w-full rounded-lg" src={local4} alt="image" />
              <img className="h-auto max-w-full rounded-lg" src={local5} alt="image" />
            </div>
          </div>
        </section>
      </Reveal>

      <Map />
      <ContactSection />
    </div>
  )
}

export default About
