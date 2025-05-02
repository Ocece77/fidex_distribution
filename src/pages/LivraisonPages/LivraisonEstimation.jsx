import React from 'react';
import { useTranslation } from 'react-i18next';

import photo1 from '../../assets/photos/livraison/livraison8.jpg';
import photo2 from '../../assets/photos/livraison/livraison2.jpg';

import ContactSection from '../../components/ContactSection';
import Map from '../../components/Map';
import HeaderComponent from '../../components/HeaderComponent';
import EstimationEnvoi from '../../components/EstimationEnvoi'; 
import StepCardsSection from '../../components/StepCardsSection';
import ParallaxSection from '../../components/ParallaxSection';

import { faBoxesPacking, faCalculator, faHouse } from '@fortawesome/free-solid-svg-icons';

const LivraisonEstimation = () => {
  const { t } = useTranslation();

  const step1 = t('delivery.deliveryEstimation.stepsList.0', { returnObjects: true });
  const step2 = t('delivery.deliveryEstimation.stepsList.1', { returnObjects: true });
  const step3 = t('delivery.deliveryEstimation.stepsList.2', { returnObjects: true });

  const stepList = [
    {
      id: step1.id,
      cardsTitre: step1.title,
      cardsDesc: step1.description,
      cardsLogo: faCalculator,
      cardsLink: step1.link,
      cardsLinkLabel: step1.linkLabel
    },
    {
      id: step2.id,
      cardsTitre: step2.title,
      cardsDesc: step2.description,
      cardsLogo: faBoxesPacking,
      cardsLink: step2.link,
      cardsLinkLabel: step2.linkLabel
    },
    {
      id: step3.id,
      cardsTitre: step3.title,
      cardsDesc: step3.description,
      cardsLogo: faHouse,
      cardsLink: step3.link,
      cardsLinkLabel: step3.linkLabel
    }
  ];

  const headerBtns = {
    [t('delivery.deliveryEstimation.header.buttons.track')]: "/livraison/suivi", 
    [t('delivery.deliveryEstimation.header.buttons.dropOff')]: "/contacts"
  };

  const parallaxBtn = {
    [t('delivery.deliveryEstimation.parallax.button')]: "/livraison/estimation"
  };

  return (
    <section className='grid grid-cols-1 gap-20'>
      <HeaderComponent
        titre={t('delivery.deliveryEstimation.header.title')}
        backgroundImage={photo1}
        desc={t('delivery.deliveryEstimation.header.description')}
        btns={headerBtns}
      />

      <div id="estimation-form" className='bg-white'>
        <EstimationEnvoi />
      </div>

      <StepCardsSection
        titre={t('delivery.deliveryEstimation.stepsSection.title')}
        desc={t('delivery.deliveryEstimation.stepsSection.description')}
        cards={stepList}
        dark={true}
      />

      <ParallaxSection
        titre={t('delivery.deliveryEstimation.parallax.title')}
        desc={t('delivery.deliveryEstimation.parallax.description')}
        btn={parallaxBtn}
        img={photo2}
      />

      <Map />
      <ContactSection />
    </section>
  );
};

export default LivraisonEstimation;
