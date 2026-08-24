import PropTypes from 'prop-types'
import React from 'react'
import Reveal from '../animation/Reveal'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardsSection = ({titre="titre", desc="description" , cards=[]}) => {

  const { t } = useTranslation(); // Utilisation du hook i18next
  
  const gridCards = `grid-cols-1 md:grid-cols-${cards.length}`
  return (
    <div className="py-20">
      <div className="mx-auto lg:max-w-7xl lg:px-8 px-5">
        <Reveal>
          {/*Titre*/}
          <div className="flex flex-col gap-4 w-full justify-center items-center text-center md:px-10">  
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-primary">{titre}</h1>
            <p className="text-lg font-light max-w-2xl">{desc}</p>
          </div>
        </Reveal>

        <Reveal>
          {/*carte */}
          <div className={`mx-auto mt-5 grid md:grid-cols-4 grid-cols-2 gap-x-2 gap-y-10 sm:mt-16 lg:mx-0 lg:max-w-none ${gridCards} md:gap-4 md:p-1.5`}>
            {cards.map((card , i) => (
              <div key={i} className="rounded-lg shadow-[0_0px_10px_rgba(150,150,150,0.15)] h-full ">
                    <div className='grid grid-cols-1 flex-col gap-3 w-full h-full rounded-lg overflow-hidden'>


                    <div className="h-50 w-full overflow-hidden">
                         <img className="object-cover w-full h-full" src={card.cardsImg} alt={card.cardsTitre}/>
                       </div>

                        <div className="grid grid-cols-1 lg:px-5 px-2 md:gap-2 gap-5">
                            <p className='text-primary font-extrablack text-2xl md:text-xl lg:text-3xl h-10 md:h-18 capitalize leading-6.5'>{card.cardsTitre}</p>
                           {card.cardsDesc &&  <p className="md:h-25 text-neutral-500 font-light lg:text-[14px] text-sm">{card.cardsDesc}</p>}
                        </div>
                   
                     
                       <Link to={card.cardsLink} className="flex items-center px-5 py-3 bg-primary text-white transition-all hover:text-white hover:bg-red-800 hover:gap-5 gap-2">
                           {card.cardsLinkLabel || t('btn-contact')}
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
    cardsLinkLabel:PropTypes.string.isRequired,
  })).isRequired

}
export default CardsSection