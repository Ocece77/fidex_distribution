import React from 'react';
import { useTranslation } from 'react-i18next';
import { faPlane, faShip, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import HeaderComponent from '../../components/HeaderComponent';
import StepCardsSection from '../../components/StepCardsSection';
import ParallaxSection from '../../components/ParallaxSection';
import InfoSection from '../../components/InfoSection';
import ContactSection from '../../components/ContactSection';
import Map from '../../components/Map';

import expedition1 from "../../assets/photos/expedition/expedition1.jpeg";
import expedition2 from "../../assets/photos/expedition/expedition2.jpg";
import garantie from "../../assets/photos/expedition/garantie3.jpg";

const Expedition = () => {
  const { t } = useTranslation();

  const stepList = [
    {
      id: 1,
      cardsTitre: t('shipping.expedition.stepCards.0.title'),
      cardsDesc: t('shipping.expedition.stepCards.0.description'),
      cardsLogo: faTruckFast,
      cardsLink: '/contacts',
      cardsLinkLabel: t('shipping.expedition.stepCards.0.linkLabel'),
    },
    {
      id: 2,
      cardsTitre: t('shipping.expedition.stepCards.1.title'),
      cardsDesc: t('shipping.expedition.stepCards.1.description'),
      cardsLogo: faPlane,
      cardsLink: '/contacts',
      cardsLinkLabel: t('shipping.expedition.stepCards.1.linkLabel'),
    },
    {
      id: 3,
      cardsTitre: t('shipping.expedition.stepCards.2.title'),
      cardsDesc: t('shipping.expedition.stepCards.2.description'),
      cardsLogo: faShip,
      cardsLink: '/contacts',
      cardsLinkLabel: t('shipping.expedition.stepCards.2.linkLabel'),
    },
    {
      id: 4,
      cardsTitre: t('shipping.expedition.stepCards.3.title'),
      cardsDesc: t('shipping.expedition.stepCards.3.description'),
      cardsLogo: faTruckFast,
      cardsLink: '/contacts',
      cardsLinkLabel: t('shipping.expedition.stepCards.3.linkLabel'),
    }
  ];

  return (
    <section className='grid grid-cols-1 gap-40'>
      <HeaderComponent
        titre={t('shipping.expedition.title')}
        backgroundImage={expedition2}
        desc={t('shipping.expedition.description')}
        btns={{
          [t('shipping.expedition.buttons.contactUs')]: "/contacts",
          [t('shipping.expedition.buttons.guarantees')]: "/expedition/garantie"
        }}
      />

      <StepCardsSection
        titre={t('shipping.expedition.stepSection.title')}
        desc={t('shipping.expedition.stepSection.description')}
        cards={stepList}
      />

      <InfoSection
        img={garantie}
        titre={t('shipping.expedition.infoSection.title')}
        desc={t('shipping.expedition.infoSection.description')}
        btn={{
          btnTitre: t('shipping.expedition.infoSection.buttonLabel'),
          btnLink: "/garanties"
        }}
        darkBg={true}
      />

      <ParallaxSection
        titre={t('shipping.expedition.parallaxSection.title')}
        desc={t('shipping.expedition.parallaxSection.description')}
        img={expedition1}
        btn={{
          btnTitre: t('shipping.expedition.parallaxSection.buttonLabel'),
          btnLink: "/expedition/garantie"
        }}
      />

      <Map />
      <ContactSection />
    </section>
  );
};

export default Expedition;
