import React from 'react'
import Hero from '../components/Hero'
import ContactSection from '../components/ContactSection'
import Map from '../components/Map'
import Stats from '../components/Stats'
import CardsSection from '../components/CardsSection'
import TexteAndImageSection from '../components/TexteAndImageSection'
import photo1 from '../assets/photos/exploitationminiere/exploitation1.jpg'

const sectionTexte1 = "L'innovation n'est pas simplement une nouvelle idée, mais une force qui transforme les défis en opportunités.   C'est l'art de repenser le présent pour créer un avenir meilleur, plus efficace et durable. "
const sectionTexte2 = "Découvrir notre vision "

const Homepage = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Hero/>
      <Stats/>
      <CardsSection titre='Achetez, investissez, ou faites-vous livrer en toute confiance avec nous.'
      desc="Que ce soit pour l'achat d'une voiture, d'une concession minière ou la réception de colis, nous sommes là pour vous accompagner à chaque étape."/>
      <TexteAndImageSection texte={sectionTexte1} img={photo1}/>
      <CardsSection titre={sectionTexte2} 
      desc='Plongez dans notre vision, où innovation, engagement et durabilité façonnent chaque aspect de nos activités.'/>
      <Map/>
      <ContactSection/>
    </div>
  )
}

export default Homepage