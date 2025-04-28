import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import HeaderComponent from '../../components/HeaderComponent'
import StepCardsSection from '../../components/StepCardsSection'
import { faPlane, faShip, faTruckFast } from '@fortawesome/free-solid-svg-icons'

import expedition1 from "../../assets/photos/expedition/expedition1.jpeg"
import expedition2 from "../../assets/photos/expedition/expedition2.jpg"

import garantie from "../../assets/photos/expedition/garantie3.jpg"

import ParallaxSection from '../../components/ParallaxSection'
import InfoSection from '../../components/InfoSection'

const stepList =  [
  {
    id: 1,
    cardsTitre: 'Fret Express',
    cardsDesc: ' Livraison rapide de courriers et colis, à déposer avant la veille du départ',
    cardsLogo:faTruckFast,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 2,
    cardsTitre: 'Fret Aérien',
    cardsDesc: 'Transport international offrant un excellent rapport poids/prix/temps.',
    cardsLogo:faPlane,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 3,
    cardsTitre: 'Fret Aérien',
    cardsDesc: "Solution économique pour le transport",
    cardsLogo:faShip,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 4,
    cardsTitre: 'Sous Douane',
    cardsDesc: " Gestion des formalités douanières et livraison à la ville de destination.",
    cardsLogo:faTruckFast,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
]

const Expedition = () => {
  return (
    <section className='grid grid-cols-1 gap-40'>
           <HeaderComponent
                titre={"Expédition"} 
                backgroundImage={expedition2} 
                desc={"Faites confiance à notre service pour des envois internationaux sans souci."} 
                btns={{"Nous contacter":"/contacts","Nos garanties":"/expedition/garantie"}}
                    />
                <StepCardsSection
                  titre="Expédiez à l'international en toute tranquillité"
                  desc="Choisissez parmi nos multiples options d’envoi, conçues pour allier efficacité et rapidité. "
                  cards={stepList}
                />
                                
              <InfoSection
                img={garantie}
                titre={"Nos garanties pour chaque envoi"}
                desc={
                  "Votre sérénité est notre priorité. À chaque étape de l’expédition, nous nous engageons à garantir la sécurité de vos biens, leur traçabilité en temps réel, et leur livraison dans les délais. Faites confiance à un service qui place la fiabilité au cœur de ses engagements."
                }
                btn={{
                  btnTitre: "Découvrir nos engagements",
                  btnLink: "/garanties"
                }}
                darkBg={true}
              />
              <ParallaxSection
              titre="Envoyez vos colis à l'international en toute sérénité"
              desc="Nous garantissons une livraison rapide et sécurisée à l'international pour préserver l'intégrité de vos biens."
              img={expedition1} 
              btn={{"btnTitre":"Nos garanties","btnLink":"/expedition/garantie"}}
              />


        <Map/>
        <ContactSection/>
    </section>
  )
}

export default Expedition