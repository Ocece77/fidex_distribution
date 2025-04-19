import React from 'react'
import photo1 from '../../assets/photos/livraison/livraison1.png'
import HeaderComponent from '../../components/HeaderComponent'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import StepCardsSection from '../../components/StepCardsSection'
import ParallaxSection from '../../components/ParallaxSection'

const Livraison = () => {
  return (
    <>
   <HeaderComponent
      titre={"Achat et Livraison"} 
      backgroundImage={photo1} 
      desc={"Simplifiez vos achats et vos livraisons avec nos solutions sur mesure"} 
      btns={{"Estimez votre envoi":"/estimationLivraison" , "Déposer votre colis en agence":"/contacts"}}
    />
    <StepCardsSection/>
    <ParallaxSection/>
    
    <Map/>
    <ContactSection/>
    </>

  )
}

export default Livraison