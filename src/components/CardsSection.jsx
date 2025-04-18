import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import Reveal from '../animation/Reveal'
import { Link } from 'react-router-dom';

const CardsSection = ({titre="titre", desc="description" , cards=[]}) => {
  return (
    <div className="sm:py-10">
      <div className="mx-auto max-w-7xl lg:px-8 md:px-20 px-5">
        <Reveal>
          {/*Titre*/}
          <div className="flex flex-col gap-4 w-full justify-center items-center text-center md:px-10">  
            <h1 className="lg:text-6xl text-4xl font-bold text-primary">{titre}</h1>
            <p className="text-lg font-light max-w-2xl">{desc}</p>
          </div>
        </Reveal>

        <Reveal>
          {/*carte */}
          <div className="mx-auto mt-5 grid grid-cols-1 gap-x-2 gap-y-10 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:gap-4 md:p-1.5">
            {cards.map((card , i) => (
              
              <div key={i} className="rounded-lg shadow-[0_0px_10px_rgba(150,150,150,0.15)] h-full ">
                    <div className='grid grid-cols-1 flex-col gap-3 w-full h-full rounded-lg overflow-hidden'>


                    <div className="max-h-50 w-full">
                         <img className="object-cover h-full w-full " src={card.cardsImg} alt="Sunset in the mountains"/>
                       </div>

                        <div className="grid grid-cols-1 gap-3 px-5 ">
                            <p className='text-primary font-extrablack text-2xl'>{card.cardsTitre}</p>
                            <p className="h-25 text-neutral-500 font-light">{card.cardsDesc}</p>
                        </div>
                   

                       <Link to={card.cardsLink} className="flex items-center px-5 py-3 bg-primary text-white transition-all hover:text-white hover:bg-red-800 hover:gap-5 gap-2  ">
                           En savoir plus
                           <svg className="w-4 h-4 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
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