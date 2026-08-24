import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import HeaderComponent from '../../components/HeaderComponent'
import { faBoxesPacking, faCalculator, faHouse } from '@fortawesome/free-solid-svg-icons'
import ParallaxSection from '../../components/ParallaxSection'
import StepCardsSection from '../../components/StepCardsSection'
import SearchBar from '../../components/SearchBar'
import photo1 from '../../assets/photos/livraison/livraison7.jpg'
import photo2 from '../../assets/photos/livraison/livraison2.jpg'

const LivraisonSuivi = () => {
  const { t } = useTranslation()

  const stepList = [
    {
      id: 1,
      cardsTitre: t('delivery.deliveryTracking.stepsList.0.title'),
      cardsDesc: t('delivery.deliveryTracking.stepsList.0.description'),
      cardsLogo: faCalculator,
      cardsLink: t('delivery.deliveryTracking.stepsList.0.link'),
      cardsLinkLabel: t('delivery.deliveryTracking.stepsList.0.linkLabel'),
    },
    {
      id: 2,
      cardsTitre: t('delivery.deliveryTracking.stepsList.1.title'),
      cardsDesc: t('delivery.deliveryTracking.stepsList.1.description'),
      cardsLogo: faBoxesPacking,
      cardsLink: t('delivery.deliveryTracking.stepsList.1.link'),
      cardsLinkLabel: t('delivery.deliveryTracking.stepsList.1.linkLabel'),
    },
    {
      id: 3,
      cardsTitre: t('delivery.deliveryTracking.stepsList.2.title'),
      cardsDesc: t('delivery.deliveryTracking.stepsList.2.description'),
      cardsLogo: faHouse,
      cardsLink: t('delivery.deliveryTracking.stepsList.2.link'),
      cardsLinkLabel: t('delivery.deliveryTracking.stepsList.2.linkLabel'),
    },
  ]

  return (
    <section className='grid grid-cols-1 gap-20'>
      <HeaderComponent
        titre={t('delivery.deliveryTracking.header.title')}
        backgroundImage={photo1}
        desc={t('delivery.deliveryTracking.header.description')}
        btns={{
          [t('delivery.deliveryTracking.header.buttons.estimate')]: '/estimationLivraison',
          [t('delivery.deliveryTracking.header.buttons.dropOff')]: '/contacts',
        }}
      />

      <SearchBar />

      <StepCardsSection
        titre={t('delivery.deliveryTracking.stepsSection.title')}
        desc={t('delivery.deliveryTracking.stepsSection.description')}
        cards={stepList}
      />

      <ParallaxSection
        titre={t('delivery.deliveryTracking.parallax.title')}
        desc={t('delivery.deliveryTracking.parallax.description')}
        btn={{ [t('delivery.deliveryTracking.parallax.button')]: '/livraison/estimation' }}
        img={photo2}
      />

      <Map />
      <ContactSection />
    </section>
  )
}

export default LivraisonSuivi
