import React from 'react'
import ContactSection from '../../components/ContactSection'
import Map from '../../components/Map'
import HeaderComponent from '../../components/HeaderComponent'

const LivraisonEstimation =() => {
  return (
    <section>
       <HeaderComponent
          titre={"Estimation de l'envoie"} 
          backgroundImage={""} 
          desc={"Simplifiez vos achats et vos livraisons avec nos solutions sur mesure"} 
          btns={{"Suivre un colis":"livraison/suivi" , "Déposer votre colis en agence":"/contacts"}}
        />
      <Map/>
      <ContactSection/>
    </section>
  )
}

export default LivraisonEstimation