import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';

const HeaderComponent = ({titre, desc, btns}) => {
  return (
    <section className="bg-transparent relative h-screen">
    <div className="grid max-w-screen-xl  lg:gap-8 xl:gap-0  lg:grid-cols-12 px-10 ">
        <div className="h-screen flex flex-col lg:col-span-7  items-center justify-center">

           {/*Titre & description*/}
           <div className='flex flex-col justify-center '>
             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-9xl text-white ">Votre partenaire pour réussir avec excellence</h1>
             <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white ">De l'extraction des ressources à la mobilité haut de gamme, en passant par des solutions de livraison efficaces, nous connectons vos besoins à l'excellence</p>
           </div>

            {/*Boutons d'action */}
            <div className='flex  w-full '>
              <Link to="contacts" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-white hover:bg-red-800 hover:text-white transition-all">
                    Nous contacter
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
              <Link to="about" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-red-800 hover:text-white transition-all">
                  Nous découvrir
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link> 

            </div>

        </div>           
    </div>
 
    {/*vidéo */}
    <div className="absolute w-screen inset-0 -z-10 h-5/6 overflow-hidden">         
      <div className='absolute h-full w-full bg-black opacity-40'></div>
     
        </div>     
    </section>
  )
}

HeaderComponent.propTypes= {
  titre :PropTypes.string.isRequired,
  desc :PropTypes.string.isRequired,
  btns :PropTypes.array.isRequired,
}

export default HeaderComponent;