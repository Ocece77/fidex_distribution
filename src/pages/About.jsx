import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import photo1 from '../assets/photos/about/photoLocalFidex2.jpeg'
import Map from '../components/Map'
import ContactSection from '../components/ContactSection'

const About = () => {
  return (
    <div>
      <HeaderComponent
       titre={"À propos de nous"} 
       backgroundImage={photo1} 
       desc={"Nous sommes une entreprise dédiée à simplifier vos besoins en logistique, automobile et exploitation minière."} 
       btns={{"Nous contacter":"/contacts"}}
       />
      <Map/>
      <ContactSection/>
    </div>
  )
}

export default About