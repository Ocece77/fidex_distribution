import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import HeaderComponent from '../../components/HeaderComponent'
import VehiculesHeader from '../../components/vehiculesHeader'
import VehiculesSection from '../../components/vehiculesSection'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import ParallaxSection from '../../components/ParallaxSection'

const Vehicules = () => {
  const { cat } = useParams();
  const currentType = cat || "all"; 

  return (
    <section>
      <VehiculesHeader/>
      <VehiculesSection cat={currentType}/>
      <ParallaxSection/>
      <Map/>
     <ContactSection/>

    </section>
  )
}

export default Vehicules