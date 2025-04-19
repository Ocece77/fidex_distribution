import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import HeaderComponent from '../../components/HeaderComponent'
import EstimationEnvoi from '../../components/EstimationEnvoi'
import StepCardsSection from '../../components/StepCardsSection'
import ParallaxSection from '../../components/ParallaxSection'
import { faBoxesPacking, faCalculator, faHouse } from '@fortawesome/free-solid-svg-icons'

import photo1 from '../../assets/photos/livraison/livraison8.jpg'
import photo2 from '../../assets/photos/livraison/livraison2.jpg'

const stepList =  [
  {
    id: 1,
    cardsTitre: 'Envoyer un colis',
    cardsDesc: 'Simplifiez l’expédition de vos colis en les déposant dans notre agence. ',
    cardsLogo:faCalculator,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 2,
    cardsTitre: 'Estimez votre envoie',
    cardsDesc: 'Obtenez une estimation rapide et gratuite des frais d’expédition',
    cardsLogo:faBoxesPacking,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 3,
    cardsTitre: 'Se rendre en agence',
    cardsDesc: "Déposer votre colis en agence. Nous nous chargeons de nous occuper du processus d’envoie",
    cardsLogo:faHouse,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },

]
const LivraisonEstimation =() => {
  return (
    <section className='grid grid-cols-1 gap-20'> 
       <HeaderComponent
          titre={"Estimation de l'envoie"} 
          backgroundImage={photo1} 
          desc={"Simplifiez vos achats et vos livraisons avec nos solutions sur mesure"} 
          btns={{"Suivre un colis":"livraison/suivi" , "Déposer votre colis en agence":"/contacts"}}
        />
      <EstimationEnvoi/>

      <StepCardsSection
              titre="Faites vous livrer dans notre agence"
              desc="Profitez de la commodité de la livraison en agence pour récupérer vos colis rapidement et facilement, directement à l'endroit qui vous convient."
              cards={stepList}
              dark={true}
         />
       
      <ParallaxSection
            titre="Estimez le coût d’envoie de votre colis"
            desc="Estimez facilement le coût d'envoi de votre colis en renseignant simplement ses dimensions, son poids et les destinations d'expédition et de livraison"
            btn={{"Estimer votre envoi":"/livraison/estimation"}}
            img={photo2}
            />
      

      
      <Map/>
      <ContactSection/>
    </section>
  )
}

export default LivraisonEstimation