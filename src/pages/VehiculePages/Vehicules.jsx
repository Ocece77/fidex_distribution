import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import VehiculesHeader from '../../components/vehiculesHeader'
import VehiculesSection from '../../components/vehiculesSection'
import { useParams } from 'react-router-dom'
import ParallaxSection from '../../components/ParallaxSection'
import vehicule1 from '../../assets/photos/vehicules/vehicule3.jpeg'
const Vehicules = () => {
  const { cat } = useParams();
  const currentType = cat || "all"; 

  return (
    <section className='grid lg:gap-5 gap-20'>
      <VehiculesHeader/>
      <VehiculesSection cat={currentType}/>
      <ParallaxSection titre={"Achetez votre véhicule en toute tranquillité"} desc={"À la recherche d’une voiture neuve ? Nos experts vous guident pour choisir le modèle qui correspond à vos attentes."} img={vehicule1} />
      <div className='flex flex-col gap-30'>
              <Map/>
     <ContactSection/>
      </div>


    </section>
  )
}

export default Vehicules