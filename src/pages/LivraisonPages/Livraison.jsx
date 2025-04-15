import React from 'react'
import photo1 from '../../assets/photos/livraison/livraison1.png'
import HeaderComponent from '../../components/HeaderComponent'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'

const Livraison = () => {
  return (
    <>
   <HeaderComponent
      titre={"Achat et Livraison"} 
      backgroundImage={photo1} 
      desc={"Simplifiez vos achats et vos livraisons avec nos solutions sur mesure"} 
      btns={{"Estimez votre envoi":"/estimationLivraison" , "Déposer votre colis en agence":"/contacts"}}
    />
    
    <Map/>
    <ContactSection/>
    </>

  )
}

export default Livraison