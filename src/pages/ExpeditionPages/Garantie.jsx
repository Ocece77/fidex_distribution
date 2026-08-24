import React from 'react';
import { useTranslation } from 'react-i18next';
import { faLocationArrow, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import HeaderComponent from '../../components/HeaderComponent';
import StepCardsSection from '../../components/StepCardsSection';
import ParallaxSection from '../../components/ParallaxSection';
import InfoSection from '../../components/InfoSection';
import ContactSection from '../../components/ContactSection';
import Map from '../../components/Map';

import garantie1 from "../../assets/photos/expedition/garantie.jpg";
import garantie2 from "../../assets/photos/expedition/garantie2.jpg";
import expedition3 from "../../assets/photos/expedition/expedition3.jpg";

const Garantie = () => {
  const { t } = useTranslation();

  const garantiesList = [
    {
      id: 1,
      cardsTitre: t('shipping.garantie.cards.0.title'),
      cardsDesc: t('shipping.garantie.cards.0.description'),
      cardsLogo: faShieldHalved,
      cardsLink: '/services',
      cardsLinkLabel: t('shipping.garantie.cards.0.linkLabel'),
    },
    {
      id: 2,
      cardsTitre: t('shipping.garantie.cards.1.title'),
      cardsDesc: t('shipping.garantie.cards.1.description'),
      cardsLogo: faLocationArrow,
      cardsLink: '/suivi',
      cardsLinkLabel: t('shipping.garantie.cards.1.linkLabel'),
    },
    {
      id: 3,
      cardsTitre: t('shipping.garantie.cards.2.title'),
      cardsDesc: t('shipping.garantie.cards.2.description'),
      cardsLogo: faCheckCircle,
      cardsLink: '/garanties',
      cardsLinkLabel: t('shipping.garantie.cards.2.linkLabel'),
    },
  ];

  return (
    <section className='grid grid-cols-1 gap-40'>
      <HeaderComponent
        titre={t('shipping.garantie.title')}
        backgroundImage={garantie1}
        desc={t('shipping.garantie.description')}
        btns={{
          [t('shipping.garantie.buttonLabels.contactUs')]: "/contacts",
          [t('shipping.garantie.buttonLabels.shipGoods')]: "/expedition",
        }}
      />

      <StepCardsSection
        titre={t('shipping.garantie.stepSection.title')}
        desc={t('shipping.garantie.stepSection.description')}
        cards={garantiesList}
      />

      <ParallaxSection
        titre={t('shipping.garantie.parallaxSection.title')}
        desc={t('shipping.garantie.parallaxSection.description')}
        btn={{"btnTitre": t('shipping.garantie.parallaxSection.buttonLabel'), "btnLink": "/expedition"}}
        img={garantie2}
      />

      <InfoSection
        img={expedition3}
        titre={t('shipping.garantie.infoSection.title')}
        desc={t('shipping.garantie.infoSection.description')}
        btn={{
          btnTitre: t('shipping.garantie.infoSection.buttonLabel'),
          btnLink: "/expedition",
        }}
      />

      <Map />
      <ContactSection />
    </section>
  );
};

export default Garantie;
