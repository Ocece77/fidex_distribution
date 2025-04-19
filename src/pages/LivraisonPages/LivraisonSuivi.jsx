import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import HeaderComponent from '../../components/HeaderComponent'

function LivraisonSuivi() {
  return (
    <section>
     <HeaderComponent
        titre={"Suivi de colis"} 
        backgroundImage={""} 
        desc={"Simplifiez vos achats et vos livraisons avec nos solutions sur mesure"} 
        btns={{"Estimez votre envoi":"/estimationLivraison" , "Déposer votre colis en agence":"/contacts"}}
      />
      <Map/>
     <ContactSection/>
    </section>
  )
}

export default LivraisonSuivi