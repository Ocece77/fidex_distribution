import React from 'react'

import photo1 from '../../assets/photos/livraison/livraison1.jpeg'
import photo2 from '../../assets/photos/livraison/livraison2.jpg'
import photo4 from '../../assets/photos/livraison/livraison4.jpg'
import photo5 from '../../assets/photos/livraison/livraison5.jpg'


import HeaderComponent from '../../components/HeaderComponent'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import StepCardsSection from '../../components/StepCardsSection'
import ParallaxSection from '../../components/ParallaxSection'
import { faBoxesPacking, faDesktop, faHouse , faTruckFast } from '@fortawesome/free-solid-svg-icons'
import InfoSection from '../../components/InfoSection'
import Reveal from '../../animation/Reveal'
import { Link } from 'react-router-dom'


const stepList =  [
  {
    id: 1,
    cardsTitre: '1. Commandez sur le site de votre choix.',
    cardsDesc: 'Passez commande de votre produit sur le site de votre choix.',
    cardsLogo:faDesktop,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 2,
    cardsTitre: '2. Choisissez notre agence comme adresse de livraison',
    cardsDesc: 'Passez commande de votre produit sur le site de votre choix.',
    cardsLogo:faBoxesPacking,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 3,
    cardsTitre: '3. Choisissez notre agence comme adresse de livraison',
    cardsDesc: "Nous recevons votre colis à l'agence sélectionnée.",
    cardsLogo:faHouse,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
  {
    id: 4,
    cardsTitre: '4. Choisissez notre agence comme adresse de livraison',
    cardsDesc: "Vous serez notifié dès que votre colis arrive et pourrez le retirer facilement dans l'agence choisie.",
    cardsLogo:faTruckFast,
    cardsLink: '/contacts',
    cardsLinkLabel:"Acheter"
  },
]

const Livraison = () => {
  return (
    <section className='grid grid-cols-1 gap-20'> 
      <HeaderComponent
          titre={"Livraison partout en RDC"} 
          backgroundImage={photo1} 
          desc={"Simplifiez vos achats et vos livraisons avec nos solutions sur mesure"} 
          btns={{"Estimez votre envoi":"/estimationLivraison" , "Déposer votre colis en agence":"/contacts"}}
        />
      <StepCardsSection
        titre="Faites vous livrer en agence et partout en RDC"
        desc="Profitez de la commodité de la livraison en agence pour récupérer vos colis rapidement et facilement, directement à l'endroit qui vous convient."
        cards={stepList}
      />

      <section className="bg-dark-primary h-full w-screen p-10 md:px-20 text-white flex flex-col justify-center items-center">
          
          <Reveal>
              <div className='grid grid-cols-1 h-full gap-10 max-w-7xl mx-auto py-10'>
                      <div className="text-center">
                        <p className='text-5xl font-bold'>Nos Services</p>
                      </div>

                      
                    <div className="grid md:grid-cols-2 gap-5 justify-center ">
                        
                    {/*options de paiement */}
                        <div className='grid grid-cols-1 gap-5'>
                            <div className="w-full h-100 overflow-hidden">
                              <img src={photo5} alt="" className="w-full h-full object-cover"/>
                            </div>

                            <div className='flex flex-col gap-5'>
                              <p className='font-bold text-2xl'>Options de paiement</p>
                              <p>Nous proposons plusieurs options de paiement sécurisées, y compris Visa, Mastercard, PayPal, ainsi que des solutions locales comme Airtel Money, M-Pesa et Orange Money, pour une expérience rapide et flexible.</p>
                            </div>
                            
                          </div>         
                          
                      {/*sécurisation des transations */}
                          <div className='grid grid-cols-1 gap-5'>
                            <div className="w-full h-100 overflow-hidden">
                              <img  src={photo4} alt="" className="w-full h-full object-cover"/>
                            </div>

                            <div className='flex flex-col gap-5'>
                              <p className='font-bold text-2xl'>Sécurisation des transactions</p>
                              <p>Toutes vos transactions sont protégées par des technologies de cryptage avancées, garantissant ainsi la sécurité et la confidentialité de vos données personnelles et financières.</p>
                            </div>
                            
                          </div>

                    </div>

                    
                </div>
            </Reveal>

              {/*btn*/}
              <div className="w-full flex  justify-center">
                  <Link to="/contacts" className="flex items-center gap-2 hover:gap-4  justify-center max-w-fit px-3 py-2 mr-3 text-sm text-center rounded-lg bg-white hover:bg-red-800 text-red-800 hover:text-white font-bold transition-all ">
                    Se rendre dans notre agence
                    <svg className="w-3 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
              </div>
            
      </section>
          

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

export default Livraison