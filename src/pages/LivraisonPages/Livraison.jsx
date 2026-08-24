import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';

import photo1 from '../../assets/photos/livraison/livraison1.jpeg';
import photo2 from '../../assets/photos/livraison/livraison2.jpg';
import photo4 from '../../assets/photos/livraison/livraison4.jpg';
import photo5 from '../../assets/photos/livraison/livraison5.jpg';

import HeaderComponent from '../../components/HeaderComponent';
import ContactSection from '../../components/ContactSection';
import Map from '../../components/Map';
import StepCardsSection from '../../components/StepCardsSection';
import ParallaxSection from '../../components/ParallaxSection';
import InfoSection from '../../components/InfoSection';
import Reveal from '../../animation/Reveal';

import { faBoxesPacking, faDesktop, faHouse, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const stepIcons = {
  1: faDesktop,
  2: faBoxesPacking, // Assuming this icon fits step 2 better
  3: faHouse,
  4: faTruckFast
};

const Livraison = () => {
  const { t } = useTranslation(); 


  const translatedStepList = t('delivery.stepsList', { returnObjects: true }) || [];

  const stepListForComponent = translatedStepList.map(step => ({
    id: step.id,
    cardsTitre: step.title,
    cardsDesc: step.description,
    cardsLogo: stepIcons[step.id] || faDesktop, 
    cardsLink: step.link, 
    cardsLinkLabel: step.linkLabel
  }));

  const headerBtns = {
    [t('delivery.header.buttons.estimate')]: "/estimationLivraison",
    [t('delivery.header.buttons.dropOff')]: "/contacts"
  };

  const parallaxBtn = {
    [t('delivery.parallax.button')]: "/livraison/estimation" 
  };


  return (
    <section className='grid grid-cols-1 gap-20'>
      <HeaderComponent
          titre={t('delivery.header.title')}
          backgroundImage={photo1}
          desc={t('delivery.header.description')}
          btns={headerBtns} 
        />
      <StepCardsSection
        titre={t('delivery.stepsSection.title')}
        desc={t('delivery.stepsSection.description')}
        cards={stepListForComponent} // Use prepared step list
      />

      <section className="bg-dark-primary h-full w-screen p-10 md:px-20 text-white flex flex-col justify-center items-center">
          <Reveal>
              <div className='grid grid-cols-1 h-full gap-10 max-w-7xl mx-auto py-10'>
                      <div className="text-center">
                        <p className='text-5xl font-bold'>{t('delivery.servicesSection.title')}</p>
                      </div>

                    <div className="grid md:grid-cols-2 gap-5 justify-center ">
                        {/* Payment options */}
                        <div className='grid grid-cols-1 gap-5'>
                            <div className="w-full h-100 overflow-hidden">
                              <img src={photo5} alt={t('delivery.servicesSection.payment.title')} className="w-full h-full object-cover"/> {/* Added alt text */}
                            </div>
                            <div className='flex flex-col gap-5'>
                              <p className='font-bold text-2xl'>{t('delivery.servicesSection.payment.title')}</p>
                              <p>{t('delivery.servicesSection.payment.description')}</p>
                            </div>
                          </div>

                      {/* Transaction security */}
                          <div className='grid grid-cols-1 gap-5'>
                            <div className="w-full h-100 overflow-hidden">
                              <img src={photo4} alt={t('delivery.servicesSection.security.title')} className="w-full h-full object-cover"/> {/* Added alt text */}
                            </div>
                            <div className='flex flex-col gap-5'>
                              <p className='font-bold text-2xl'>{t('delivery.servicesSection.security.title')}</p>
                              <p>{t('delivery.servicesSection.security.description')}</p>
                            </div>
                          </div>
                    </div>
                </div>
            </Reveal>

              {/* Go to agency button */}
              <div className="w-full flex justify-center mt-10"> {/* Added margin-top */}
                  <Link to="/contacts" className="flex items-center gap-2 hover:gap-4 justify-center max-w-fit px-3 py-2 text-sm text-center rounded-lg bg-white hover:bg-red-800 text-red-800 hover:text-white font-bold transition-all ">
                    {t('delivery.servicesSection.goToAgencyButton')}
                    <svg className="w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
              </div>
      </section>

      <ParallaxSection
        titre={t('delivery.parallax.title')}
        desc={t('delivery.parallax.description')}
        btn={parallaxBtn} // Use prepared button object
        img={photo2}
      />

      {/* Map and ContactSection likely handle their own internal translations */}
      <Map/>
      <ContactSection/>
    </section>
  );
}

export default Livraison;