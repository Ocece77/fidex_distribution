import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import photo1 from '../assets/photos/home/about4.jpg'
function ErrorPage() {
  return (
    <section className="">
        <HeaderComponent
          titre="Désolé, cette page n'existe pas"
          backgroundImage={photo1} 
          desc=""
          btns={{"Nous contacter":"/contacts" , "Retour à l'accueil":"/"}}
          />
  </section>
  )
}

export default ErrorPage

