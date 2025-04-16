import React from 'react'
import Hero from '../components/Hero'
import ContactSection from '../components/ContactSection'
import Map from '../components/Map'
import Stats from '../components/Stats'
import CardsSection from '../components/CardsSection'
import QuoteSection from '../components/QuoteSection'
import photo1 from '../assets/photos/exploitationminiere/exploitation1.jpg'
import photo2 from '../assets/photos/about/aboutgrid.png'
import InfoSection from '../components/InfoSection'

const sectionTexte1 = "L'innovation n'est pas simplement une nouvelle idée, mais une force qui transforme les défis en opportunités.   C'est l'art de repenser le présent pour créer un avenir meilleur, plus efficace et durable. "
const sectionTexte2 = "Découvrir notre vision "

const Homepage = () => {
  return (
    <div className='flex flex-col md:gap-20 '>
      <Hero/>

      <InfoSection img={photo2}
       titre={"Soutenant + de 4 000 clients à travers 22 pays"}
       desc={"Nous offrons des solutions rapides et efficaces dans trois domaines : la vente de véhicules neufs, la gestion des colis via nos centres de distribution, et l’accompagnement pour l’achat de concessions minières. Notre mission : simplifier vos projets et optimiser vos opérations."}
       btn={{"btnTitre" : "En savoir plus",
        "btnLink" : "/about",
       }}
       />

      <Stats/>

      <CardsSection titre='Achetez, investissez, ou faites-vous livrer en toute confiance avec nous.'
                    desc="Que ce soit pour l'achat d'une voiture, d'une concession minière ou la réception de colis, nous sommes là pour vous accompagner à chaque étape."/>

      <QuoteSection texte={sectionTexte1} img={photo1}/>

      <CardsSection titre={sectionTexte2} 
                    desc='Plongez dans notre vision, où innovation, engagement et durabilité façonnent chaque aspect de nos activités.'/>

      <Map/>

      <ContactSection/>
    </div>
  )
}

export default Homepage