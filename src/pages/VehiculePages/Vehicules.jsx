import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import VehiculesHeader from '../../components/vehiculesHeader'
import VehiculesSection from '../../components/vehiculesSection'
import { useParams } from 'react-router-dom'
import ParallaxSection from '../../components/ParallaxSection'
import vehicule1 from '../../assets/photos/vehicules/vehicule3.jpeg'
import { useTranslation } from 'react-i18next'

const Vehicules = () => {
  const { cat, brand } = useParams();
  const { t } = useTranslation();

  return (
    <section className='grid lg:gap-5 gap-20'>
      <VehiculesHeader />
      <VehiculesSection cat={cat || "all"} brand={brand || "all"} />
      <ParallaxSection
        titre={t('vehicules.parallaxSection.titre')}
        desc={t('vehicules.parallaxSection.desc')}
        img={vehicule1}
      />
      <div className='flex flex-col gap-30'>
        <Map />
        <ContactSection />
      </div>
    </section>
  )
}

export default Vehicules;
