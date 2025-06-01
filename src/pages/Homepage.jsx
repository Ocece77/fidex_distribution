import React from 'react'
import { faBook, faBoxOpen, faCar, faCoins } from '@fortawesome/free-solid-svg-icons'
import { faHandshake, faHeart } from '@fortawesome/free-regular-svg-icons'

import Hero from '../components/Hero'
import ContactSection from '../components/ContactSection'
import InfoSection from '../components/InfoSection'
import Map from '../components/Map'
import Stats from '../components/Stats'
import CardsSection from '../components/CardsSection'
import QuoteSection from '../components/QuoteSection'
import Carousel from '../components/Carousel'

import photo2 from '../assets/photos/about/aboutgrid.png'

import expedition1 from "../assets/photos/expedition/expedition1.jpeg"


import livraison1 from '../assets/photos/livraison/livraison1.jpeg'
import vehicule1 from '../assets/photos/vehicules/vehicule1.jpeg'

import exploitation1 from '../assets/photos/exploitationminiere/exploitation1.jpeg'
import exploitation2 from '../assets/photos/exploitationminiere/exploitation3.jpg'

import valeur1 from '../assets/photos/home/valeur1.jpg'
import valeur2 from '../assets/photos/home/valeur2.jpg'
import valeur3 from '../assets/photos/home/valeur3.jpeg'
import { useTranslation } from 'react-i18next'



const Homepage = () => {
  const { t } = useTranslation();


  const cardsList1 = [
    {
      id: 1,
      cardsTitre: t("homepage.card1.title"),
      cardsLogo: faCar,
      cardsDesc: t("homepage.card1.desc"),
      cardsImg: vehicule1,
      cardsLink: "/vehicules/type/all",
      cardsLinkLabel: t('homepage.cta')
    },
    {
      id: 2,
      cardsTitre: t("homepage.card2.title"),
      cardsLogo: faBoxOpen,
      cardsDesc: t("homepage.card2.desc"),
      cardsImg: livraison1,
      cardsLink: "/livraison",
      cardsLinkLabel: t('homepage.cta')

    },
    {
      id: 3,
      cardsTitre: t("homepage.card3.title"),
      cardsLogo: faHandshake,
      cardsDesc: t("homepage.card3.desc"),
      cardsImg: expedition1,
      cardsLink: "/expedition",
      cardsLinkLabel:t('homepage.cta')

    },
    {
      id: 4,
      cardsTitre: t("homepage.card4.title"),
      cardsLogo: faCoins,
      cardsDesc: t("homepage.card4.desc"),
      cardsImg: exploitation1,
      cardsLink: "/exploitation_miniere",
      cardsLinkLabel: t('homepage.cta')

    }
  ];

  const cardsList2 = [
    {
      id: 1,
      cardsTitre: t("homepage.card5.title"),
      cardsLogo: faHeart,
      cardsDesc: t("homepage.card5.desc"),
      cardsImg: valeur1,
      cardsLink: "/about",
    },
    {
      id: 2,
      cardsTitre: t("homepage.card6.title"),
      cardsLogo: faBook,
      cardsDesc: t("homepage.card6.desc"),
      cardsImg: valeur2,
      cardsLink: "/about",
    },
    {
      id: 3,
      cardsTitre: t("homepage.card7.title"),
      cardsLogo: faHandshake,
      cardsDesc: t("homepage.card7.desc"),
      cardsImg: valeur3,
      cardsLink: "/about",
    }
  ];

  return (
    <div className='flex flex-col gap-5 md:gap-30 overflow-hidden'>
      <Hero/>

      <InfoSection 
        img={photo2}
        titre={t("homepage.infoSection.title")}
        desc={t("homepage.infoSection.description")}
        btn={{ "btnTitre": t("homepage.infoSection.btnTitle"), "btnLink": "/about" }}
      />


      <Stats/>

      <CardsSection 
        titre={t("homepage.cardsSection1.title")}
        desc={t("homepage.cardsSection1.description")}
        cards={cardsList1}
      />

      <QuoteSection 
        texte={t("homepage.quoteSection.sectionText1")} 
        img={exploitation1} 
        isQuote={true} 
      />

      <Carousel 
        titre={t("homepage.carousel.title")}
        desc={t("homepage.carousel.description")}
      />

      <InfoSection 
        img={exploitation2}
        titre={t("homepage.infoSectionExploitation.title")}
        desc={t("homepage.infoSectionExploitation.description")}
        btn={{ "btnTitre": t("homepage.infoSectionExploitation.btnTitle"), "btnLink": "/exploitationminiere" }}
        reversed={true}
        darkBg={true}
      />

      <CardsSection 
        titre={t("homepage.cardsSection2.title")}
        desc={t("homepage.cardsSection2.description")}
        cards={cardsList2}
      />

      <Map/>

      <ContactSection/>
    </div>
  )
}

export default Homepage