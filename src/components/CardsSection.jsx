import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import Reveal from '../animation/Reveal'
import { Link } from 'react-router-dom';

const CardsSection = ({titre="titre", desc="description" , cards=[]}) => {
  return (
    <div className="sm:py-10">
      <div className="mx-auto max-w-7xl g:px-8 ">
        <Reveal>
          {/*Titre*/}
          <div className="flex flex-col gap-4 w-full text-center">  
            <h1 className="lg:text-6xl text-4xl font-bold text-primary">{titre}</h1>
            <p className="text-base font-light">{desc}</p>
          </div>
        </Reveal>

        <Reveal>
          {/*carte */}
          <div className="mx-auto mt-5 grid grid-cols-1 gap-x-2 gap-y-10 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-center justify-center md:gap-4 md:p-1.5 ">
            {cards.map((card , i) => (
              
              <div key={i} className="max-h-xl rounded shadow-[0_0px_10px_rgba(0,0,0,0.1)] pt-3 max-h-screen ">
                    <div className='flex flex-col'>
                        <div className="flex items-center gap-3 mb-2 px-3">
                            <FontAwesomeIcon icon={card.cardsLogo} color='#002265' size='xl'/>
                            <p className='text-primary font-bold lg:text-xl text-2xl'>{card.cardsTitre}</p>
                        </div>
                        
                        <p className="text-gray-700 px-3 text-[13px]">
                           {card.cardsDesc} 
                        </p>

                       <div className="py-4 overflow-hidden max-h-50 ">
                         <img className="object-fit h-full" src={card.cardsImg} alt="Sunset in the mountains"/>
                       </div>

                       <Link to={card.cardsLink} className="inline-flex items-center px-5 py-3 text-base text-center bg-primary text-white transition-all hover:text-white hover:bg-red-800 pr-2 ">
                           {card.cardsTitre}
                           <svg className="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          </Link>
                    </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
};

CardsSection.propTypes= {
  titre : PropTypes.string.isRequired,
  desc : PropTypes.string.isRequired,
  cards : PropTypes.arrayOf(PropTypes.shape({
    cardsTitre: PropTypes.string.isRequired,
    cardsLogo: PropTypes.string.isRequired,
    cardsDesc: PropTypes.string.isRequired,
    cardsImg: PropTypes.string.isRequired,
    cardsLink: PropTypes.string.isRequired,
  })).isRequired

}
export default CardsSection