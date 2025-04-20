import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'

import garantie1 from "../../assets/photos/expedition/garantie.jpg"
import garantie2 from "../../assets/photos/expedition/garantie2.jpg"
import expedition3 from "../../assets/photos/expedition/expedition3.jpg"

import HeaderComponent from '../../components/HeaderComponent'
import ParallaxSection from '../../components/ParallaxSection'
import { faLocationArrow, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import StepCardsSection from '../../components/StepCardsSection'
import InfoSection from '../../components/InfoSection'

const garantiesList = [
  {
    id: 1,
    cardsTitre: 'Sécurité optimale',
    cardsDesc: 'Vos colis sont manipulés avec soin à chaque étape pour éviter tout dommage.',
    cardsLogo: faShieldHalved, 
    cardsLink: '/services',
    cardsLinkLabel: 'En savoir plus',
  },
  {
    id: 2,
    cardsTitre: 'Suivi en temps réel',
    cardsDesc: 'Bénéficiez d’un suivi complet de votre envoi jusqu’à la livraison finale.',
    cardsLogo: faLocationArrow, 
    cardsLink: '/suivi',
    cardsLinkLabel: 'Suivre un colis',
  },
  {
    id: 3,
    cardsTitre: 'Livraison garantie',
    cardsDesc: 'Nous nous engageons à livrer vos biens dans les délais convenus.',
    cardsLogo: faCheckCircle, 
    cardsLink: '/garanties',
    cardsLinkLabel: 'Voir nos engagements',
  },
];
const Garantie = () => {
  return (
    <section className='grid grid-cols-1 gap-40'>
          <HeaderComponent
                      titre={"Nos garanties"} 
                      backgroundImage={garantie1} 
                      desc={"Parce que vos biens méritent le meilleur, nous en assurons le traitement avec le plus grand soin tout au long de leur envoi "} 
                      btns={{"Nous contacter":"/contacts","Expédier vos biens":"/expedition"}}
                          />
             
              <StepCardsSection
                  titre="Expédiez à l'international en toute tranquillité"
                  desc="Choisissez parmi nos multiples options d’envoi, conçues pour allier efficacité et rapidité. "
                  cards={garantiesList}
                />

         
              <ParallaxSection
              titre="Expédiez vos biens à l'international"
              desc="Afin de garantir un service de qualité, nous veillons au bon traitement de vos biens tout au long de l’expédition."
              btn={{"btnTitre":"En savoir plus","btnLink":"/expedition"}}
              img={garantie2}
              />        

              <InfoSection
            img={expedition3}
            titre={"Expédiez en toute confiance, où que vous soyez"}
            desc={
              "Que ce soit pour un envoi urgent ou un transport planifié, nous mettons à votre disposition des moyens sûrs, rapides et adaptés à vos besoins. Nos solutions d’expédition s’adaptent à votre rythme, pour que vos colis arrivent à destination sans stress."
            }
            btn={{
              btnTitre: "Commencer une expédition",
              btnLink: "/expedition"
            }}
          />
                 
          <Map/>
           <ContactSection/>
    </section>
  )
}

export default Garantie