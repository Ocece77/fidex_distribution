import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import Reveal from '../animation/Reveal'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const StepCardsSection = ({titre="titre", desc="description" , cards=[] , btn={} , dark=false}) => {
    const gridCards = `md:grid-cols-${cards.length}`
    const { t } = useTranslation(); 

  return (
    <div className={`py-10 ${dark ?"bg-dark-primary": "bg-white"}`}>
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:px-8 px-5 text-center gap-5">
        <Reveal>
          {/*Titre*/}
          <div className="flex flex-col gap-4 w-full justify-center items-center text-center md:px-10">  
            <h1 className={`lg:text-6xl text-4xl font-bold ${dark ?"text-white": "text-primary"}`}>{titre}</h1>
            <p className={`text-lg font-light max-w-2xl ${dark ?"text-white": "text-dark-primary"}`}>{desc}</p>
          </div>
        </Reveal>

        <Reveal>
          {/*carte */}
          <div className={`mx-auto mt-5  md:flex md:flex-wrap grid gap-x-2 gap-y-10 sm:mt-16 lg:mx-0 lg:max-w-none ${gridCards} md:gap-4 md:p-1.5`}>
            {cards.map((card , i) => (
              
              <div key={i} className={`flex-1 h-full ${dark ?`shadow-none ${i > 0 && "md:border-l-1 md:border-t-0 border-t-1 border-neutral-600"}`: "rounded-lg  shadow-[0_0px_10px_rgba(150,150,150,0.15)]"}`}>
                    <div className='grid grid-cols-1 flex-col gap-3 w-full h-full rounded-lg overflow-hidden'>

                        <div className="py-5 w-full">
                            <FontAwesomeIcon className="object-cover h-full w-full fa-5x" icon={card.cardsLogo} alt="icon" color={`${dark ?"white": "#002265"}`}  />
                        </div>

                        <div className="grid grid-cols-1 gap-3 px-5">
                            <p className={`text-primary font-extrablack lg:text-xl md:text-sm text-2xl ${dark ?"text-white": "text-primary"}`}>{card.cardsTitre}</p>
                            <p className="h-25 text-neutral-500 font-light lg:text-base md:text-[10px] text-md">{card.cardsDesc}</p>
                        </div>
                   
                    </div>
              </div>
            ))}
           
          </div>
        </Reveal>

        <Reveal>
         <div className='flex justify-center '>
             <Link to={btn.btnLink || "/contacts"} className="w-fit flex items-center px-5 py-3 rounded-lg bg-primary text-white transition-all hover:text-white hover:bg-red-800 hover:gap-5 gap-2  ">
                {btn.btnTitre|| t('delivery.servicesSection.goToAgencyButton') }
                <svg className="w-4 h-4 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
            
          </Reveal>
      </div>
    </div>
  )
};

StepCardsSection.propTypes= {
  titre : PropTypes.string.isRequired,
  desc : PropTypes.string.isRequired,
  cards : PropTypes.arrayOf(PropTypes.shape({
    cardsTitre: PropTypes.string.isRequired,
    cardsLogo: PropTypes.string.isRequired,
    cardsDesc: PropTypes.string.isRequired,
  })).isRequired,
  btn : PropTypes.shape({
       btnTitre : PropTypes.string.isRequired,
       btnLink : PropTypes.string.isRequired
     }),
   dark: PropTypes.bool.isRequired

}
export default StepCardsSection;