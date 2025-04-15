import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import Reveal from '../animation/Reveal'
const cardsList = [
    {
      id: 1,
      cardsTitre: 'Acheter une Concession',
      cardsLogo:faEarth,
      cardsDesc: 'Nous trouvons, négocions et gérons les démarches pour vous.',
      cardsImg: '',
      cardsLink: 'Acquérir des ressources',
    },
    {
        id: 1,
        cardsTitre: 'Acheter une Concession',
        cardsLogo:faEarth,
        cardsDesc: 'Nous trouvons, négocions et gérons les démarches pour vous.',
        cardsImg: '',
        cardsLink: 'Acquérir des ressources',
      },
      {
        id: 1,
        cardsTitre: 'Acheter une Concession',
        cardsLogo:faEarth,
        cardsDesc: 'Nous trouvons, négocions et gérons les démarches pour vous.',
        cardsImg: '',
        cardsLink: 'Acquérir des ressources',
      },

  ]
const CardsSection = ({titre="titre", desc="description" , cards}) => {
  return (
<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        {/*Titre*/}
        <div className="flex flex-col gap-4 w-full text-center">  
            <h1 className="lg:text-6xl text-4xl font-bold text-primary">{titre}</h1>
            <p className="text-base font-light">{desc}</p>
          </div>
        </Reveal>
        
        <Reveal>
        {/*carte */}
        <div className="mx-auto mt-10 grid  grid-cols-1 gap-x-8 gap-y-16  sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-center justify-center">
          {cardsList.map((card) => (
            
            <div class=" lg:max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <div class="flex items-center gap-2.5 font-bold text-xl mb-2">
                        <FontAwesomeIcon icon={card.cardsLogo}/>
                        <p>{card.cardsTitre}</p>
                    </div>
                    
                    <p class="text-gray-700 text-base">
                    {card.cardsDesc} 
                    </p>

                    <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>

                    <p class="font-bold text-primary text-base">
                    {card.cardsLink} 
                    </p>
                </div>
           
                </div>
          ))}
        </div>
        </Reveal>
      </div>
    </div>
  )
}
CardsSection.propTypes= {
  titre :PropTypes.string.isRequired,
  desc :PropTypes.string.isRequired,
  cards :PropTypes.shape({
    cardsTitre: PropTypes.string.isRequired,
    cardsLogo: PropTypes.string.isRequired,
    cardsDesc: PropTypes.string.isRequired,
    cardsImg: PropTypes.string.isRequired,
    cardsLink: PropTypes.string.isRequired,
  }),
}
export default CardsSection