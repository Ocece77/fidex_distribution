import React from 'react'
import videoHero from '../assets/video/fidexherovideo.mp4'
import logo from '../assets/logo.png'


const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-transparent relative h-screen  ">
    <div className="flex flex-col md:grid max-w-full gap-0 lg:gap-8 xl:gap-0 md:grid-cols-2  ">
       {/*Partie Gauche/Bas(mobile) : Texte - description - boutons CTA */}
        <div className="md:h-screen flex flex-col col-span-1 items-center justify-center md:order-1 order-2 md:px-10">
          <div className='md:max-w-2xl '>

                {/*Titre & description*/}
                <div className='flex flex-col justify-center md:text-start text-center'>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none lg:text-7xl md:text-5xl text-white ">Votre partenaire pour réussir avec excellence</h1>
                    <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white ">De l'extraction des ressources à la mobilité haut de gamme, en passant par des solutions de livraison efficaces, nous connectons vos besoins à l'excellence</p>
                </div>

                {/*Boutons d'action */}
                <div className='flex md:flex-row flex-col items-center  md:gap-0 gap-2 '>
                    <a to="contacts" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-white hover:bg-red-800 hover:text-white transition-all">
                            Nous contacter
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a to="about" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-red-800 hover:text-white transition-all">
                        Nous découvrir
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a> 
                </div>

          </div>
        </div> 
       {/*Partie Droite/Haut(mobile) : Logo */}

        <div className="flex flex-col col-span-1  items-center justify-center md:order-2 order-1">
           <img src={logo} alt="logo fidex" className='object-cover max-w-1/2' />
        </div> 

    </div>
 
    {/*vidéo */}
    <div className="absolute w-screen inset-0 -z-10 h-5/6 overflow-hidden">         
      <div className='absolute h-full w-full bg-black opacity-40'></div>
        <video autoPlay loop muted preload="auto" className='w-[130vw] pointer-events-none object-cover h-[110%] ' playsInline={true} >
             <source src={videoHero} type="video/mp4"/>
           </video>
        </div>     
    </section>
  )
}


export default Hero;