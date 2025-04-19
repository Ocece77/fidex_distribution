import React from 'react'
import { faBook, faBoxOpen, faCar, faCoins } from '@fortawesome/free-solid-svg-icons'
import { faHandshake, faHeart } from '@fortawesome/free-regular-svg-icons'

import Hero from '../components/Hero'
import ContactSection from '../components/ContactSection'
import InfoSection from '../components/InfoSection'
import Map from '../components/Map'
import Stats from '../components/Stats'
import CardsSection from '../components/CardsSection'
import QuoteSection from '../components/QuoteSection'
import Carousel from '../components/Carousel'

import photo1 from '../assets/photos/exploitationminiere/exploitation1.jpg'
import photo2 from '../assets/photos/about/aboutgrid.png'

import livraison1 from '../assets/photos/livraison/livraison1.png'
import vehicule1 from '../assets/photos/vehicules/vehicule1.jpg'

import exploitation1 from '../assets/photos/exploitationminiere/exploitation1.jpg'
import exploitation2 from '../assets/photos/exploitationminiere/exploitation3.jpg'

import valeur1 from '../assets/photos/home/valeur1.jpg'
import valeur2 from '../assets/photos/home/valeur2.jpg'
import valeur3 from '../assets/photos/home/valeur3.jpg'

const sectionTexte1 = "L'innovation n'est pas simplement une nouvelle idée, mais une force qui transforme les défis en opportunités.   C'est l'art de repenser le présent pour créer un avenir meilleur, plus efficace et durable. "
const sectionTexte2 = "Découvrir notre vision "

const cardsList1 = [
    {
      id: 1,
      cardsTitre: 'Acheter une Concession',
      cardsLogo:faCoins,
      cardsDesc: 'Nous trouvons, négocions et gérons les démarches pour vous.',
      cardsImg: exploitation1,
      cardsLink: 'Acquérir des ressources',
    },
    {
      id: 2,
      cardsTitre: 'Vente de Véhicules neufs',
      cardsLogo:faCar,
      cardsDesc: 'Explorez notre sélection de véhicules de qualité',
      cardsImg: vehicule1,
      cardsLink: 'Achetez maintenant',
    },
    {
      id: 3,
      cardsTitre: 'Livraison et retrait de colis',
      cardsLogo:faBoxOpen,
      cardsDesc: 'Profitez de notre service rapide et fiable pour la livraison et le retrait de vos colis',
      cardsImg: livraison1,
      cardsLink: 'Trouver une agence',
    },

]
const cardsList2 = [
  {
    id: 1,
    cardsTitre: 'Notre Engagement',
    cardsLogo: faHeart,
    cardsDesc: 'Nous nous engageons à offrir des solutions de qualité, durables et respectueuses de l’environnement.',
    cardsImg: valeur1, // remplace par l’image correspondante
    cardsLink: 'En savoir plus',
  },
  {
    id: 2,
    cardsTitre: 'Notre Histoire',
    cardsLogo: faBook,
    cardsDesc: 'Guidés par l\'innovation, le respect et la collaboration, nous avons construit une entreprise engagée.',
    cardsImg: valeur2, // remplace par l’image correspondante
    cardsLink: 'Découvrir notre parcours',
  },
  {
    id: 3,
    cardsTitre: 'Nos Valeurs',
    cardsLogo: faHandshake,
    cardsDesc: 'Nous croyons en l\'intégrité, l\'innovation et le respect, des principes qui guident chaque action que nous entreprenons.',
    cardsImg: valeur3, // remplace par l’image correspondante
    cardsLink: 'Explorer nos valeurs',
  },
];

const Homepage = () => {
  return (
    <div className='flex flex-col gap-30 overflow-hidden'>
      <Hero/>

      <InfoSection img={photo2}
       titre={"Soutenant + de 4000 clients à travers 22 pays"}
       desc={"Nous offrons des solutions rapides et efficaces dans trois domaines : la vente de véhicules neufs, la gestion des colis via nos centres de distribution, et l’accompagnement pour l’achat de concessions minières. Notre mission : simplifier vos projets et optimiser vos opérations."}
       btn={{"btnTitre" : "En savoir plus",
        "btnLink" : "/about",
       }}
       />

      <Stats/>

      <CardsSection titre='Achetez, investissez, ou faites-vous livrer en toute confiance avec nous.'
                    desc="Que ce soit pour l'achat d'une voiture, d'une concession minière ou la réception de colis, nous sommes là pour vous accompagner à chaque étape."
                    cards = {cardsList1}
                    />

      <QuoteSection texte={sectionTexte1} img={photo1} isQuote={true}/>

      <Carousel titre="Explorez notre gammes de véhicules neufs"
                desc="Découvrez une sélection variée de véhicules alliant performance, confort et fiabilité, adaptés à vos besoins et à vos attentes."
      />



      <InfoSection img={exploitation2}
       titre={"Achetez une concession minière"}
       desc={"Nous offrons des solutions rapides et efficaces dans trois domaines : la vente de véhicules neufs, la gestion des colis via nos centres de distribution, et l’accompagnement pour l’achat de concessions minières. Notre mission : simplifier vos projets et optimiser vos opérations."}
       btn={{"btnTitre" : "Acheter une Concession",
        "btnLink" : "/exploitationminiere",
       }}
       reversed={true}
       darkBg={true}
       />

      <CardsSection titre={sectionTexte2} 
                    desc='Plongez dans notre vision, où innovation, engagement et durabilité façonnent chaque aspect de nos activités.'
                    cards={cardsList2}/>

      <Map/>

      <ContactSection/>
    </div>
  )
}

export default Homepage