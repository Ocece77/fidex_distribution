import React from 'react'
import Map from '../components/Map'
import ContactSection from '../components/ContactSection'
import HeaderComponent from '../components/HeaderComponent'
import about1  from "../assets/photos/home/about4.jpg"

function Contacts() {
  return (
    
      <section className='grid grid-cols-1 gap-40'>
            <HeaderComponent
            titre={"Nous contacter"} 
            backgroundImage={about1} 
            desc={" Nous sommes à votre disposition par téléphone, email ou via notre formulaire de contact en ligne. Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais."} 
            btns={{"Ou nous appeler au +233 1 23 45 67":"/contacts"}}
            />

           <ContactSection/>
           <Map titre="Contactez-nous dès aujourd'hui !"/>
        </section>
  )
}

export default Contacts