import React from 'react';
import ContactSection from '../../components/ContactSection';
import Map from '../../components/Map';
import VehiculesHeader from '../../components/VehiculesHeader';
import VehiculesSection from '../../components/VehiculesSection';
import { useParams } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection';
import vehicule1 from '../../assets/photos/vehicules/vehicule3.jpeg';
import { useTranslation } from 'react-i18next';

const Vehicules = () => {
  const { cat, brand } = useParams();  // Récupérer les paramètres URL pour le filtre
  const { t } = useTranslation();  // Pour la traduction de tes textes

  return (
    <section className='grid lg:gap-5 gap-20'>
      {/* Entête des véhicules */}
      <VehiculesHeader />

      {/* Section des véhicules avec filtres */}
      <VehiculesSection 
        cat={cat || 'all'}  // Si "cat" n'est pas défini, utiliser "all" comme valeur par défaut
        brand={brand || 'all'}  // Pareil pour "brand"
      />

      {/* Section Parallax */}
      <ParallaxSection
        titre={t('vehicules.parallaxSection.titre')}  // Utilisation de la traduction
        desc={t('vehicules.parallaxSection.desc')}
        img={vehicule1}  // Image parallax
      />

      {/* Map et Section Contact */}
      <div className='flex flex-col gap-30'>
        <Map />  {/* Affichage de la carte */}
        <ContactSection />  {/* Section de contact */}
      </div>
    </section>
  );
};

export default Vehicules;
