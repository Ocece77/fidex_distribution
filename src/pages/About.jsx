import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import photo1 from '../assets/photos/about/photoLocalFidex2.jpeg'

const About = () => {
  return (
    <div>
      <HeaderComponent
       titre={"À propos de nous"} 
       backgroundImage={photo1} 
       desc={"Nous sommes une entreprise dédiée à simplifier vos besoins en logistique, automobile et exploitation minière."} 
       btns={{"Nous contacter":"/contacts"}}
       />
    </div>
  )
}

export default About