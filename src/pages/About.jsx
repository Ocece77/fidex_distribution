import React, { useEffect, useRef } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Map from '../components/Map'
import ContactSection from '../components/ContactSection'
import QuoteSection from '../components/QuoteSection'
import InfoSection from '../components/InfoSection'

import photo1 from '../assets/photos/about/photoLocalFidex2.jpeg'
import about1 from '../assets/photos/home/about2.jpg'
import about2 from '../assets/photos/home/about5.jpg'
import valeur3 from '../assets/photos/home/valeur3.jpg'
import Reveal from '../animation/Reveal'
import { Link } from 'react-router-dom'
import gsap from 'gsap/all'
import { useInView } from 'framer-motion'

const texte1 = `Nous gérons de manière responsable un portefeuille d’actifs diversifié et résilient, dans des secteurs stratégiques et prometteurs. Nous créons de la valeur en excellant dans nos opérations, en découvrant et développant de nouvelles ressources, en acquérant les bons actifs et en optimisant nos investissements. Grâce à notre approche unique de la création de valeur sociale, nous sommes un partenaire de confiance qui génère des bénéfices pour toutes les parties prenantes.`
const texte2 = `
Faire ce qui est juste: 
 Notre engagement envers un avenir durable commence par la sécurité, l’intégrité et la construction de relations de confiance avec tous nos partenaires.
Chercher de meilleures façons de faire:
L’écoute active et l’esprit d’innovation nous permettent de relever les défis et de progresser constamment. 
Avoir un impact:
 Nous assumons chaque jour la responsabilité de nos actions, de la création de valeur et des impacts positifs que nous pouvons générer.`

const About = () => {

  const numberContainerRef = useRef();
  const isInView = useInView(numberContainerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const numbers = gsap.utils.toArray(".number");

      numbers.forEach((el) => {
        const endValue = parseInt(el.innerText);
        gsap.fromTo(el, 
          { innerText: 0 }, 
          {
            innerText: endValue,
            duration: 1,
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              el.innerText = Math.floor(el.innerText); //éviter les chiffres décimal
            }
          }
        );
      });
    }
  }, [isInView]);


  return (
    <div className='grid grid-cols-1 gap-10'>
      <HeaderComponent
       titre="À propos de nous"
       backgroundImage={photo1} 
       desc="Nous sommes une entreprise dédiée à simplifier vos besoins en logistique, automobile et exploitation minière."
       btns={{"Nous contacter":"/contacts"}}
       />

      {/*Qui sommes-nous section */}
      <Reveal>
          <div ref={numberContainerRef} className='grid md:grid-cols-2 h-full gap-10 max-w-7xl mx-auto py-10'>
                {/*col de gauche */}
                <div className="flex flex-col gap-5 justify-center max-w-2xl">
                  
                
                  {/*titre*/}
                  <h1 className="lg:text-5xl text-2xl md:text-start text-center font-bold text-primary">
                  Qui sommes-nous ?
                  </h1>

                  {/*description*/}
                  <div className='grid grid-cols-1 gap-5'>

                    <p className="lg:text-base md:text-start text-center">
                    Nous sommes un acteur majeur dans le secteur des ressources, avec des activités couvrant plusieurs régions et des produits distribués à l’échelle mondiale.
                    </p>

                    <p className="lg:text-base md:text-start text-center">
                    Notre stratégie repose sur les tendances clés qui façonnent l’avenir. Nous fournissons les minerais essentiels à l’industrie , tels que le lithium et le coltan.               
                    </p>

                    <p className="lg:text-base md:text-start text-center">
                    Un portefeuille de ressources conçu pour répondre aux besoins d’aujourd’hui et aux défis de demain.
                    </p>

                  </div>
                

                  {/*btn*/}
                  <div className="w-full flex md:justify-start justify-center">
                      <Link to="/contacts" className="inline-flex items-center justify-center max-w-fit px-5 py-2 mr-3 text-sm font-medium text-center rounded-lg bg-red-800 text-white transition-all hover:ps-5">
                      Nous contacter
                      <svg className="w-3 h- ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                  </div>
                </div>

                {/*col de droite */}
                <div className="flex lg:justify-end lg:pr-10 justify-center">
                    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm lg:max-w-md text-center  py-32">
                      <div className="mb-8">
                        <h2 className="text-5xl font-bold text-primary"><span className='number'>22</span> +</h2>
                        <p className="text-gray-500 mt-2 text-sm">Pays avec nos collaborateurs dans le monde</p>
                      </div>
                      <hr className="my-6 border-gray-200" />
                      <div>
                        <h2 className="text-4xl font-bold text-primary">+ de <span className='number'>4000</span> </h2>
                        <p className="text-gray-500 mt-2 text-sm">La satisfaction de nos clients est au cœur de nos priorités.</p>
                      </div>
                    </div>
                  </div>
            </div>
      </Reveal>

        <InfoSection 
         img={about2}
         titre='Notre strategie'
         desc={texte1}
         reversed={true}
         darkBg={true}
         btn={{"btnTitre" :"Nous contacter",
                  "btnLink":"/contacts"}}/>

       <InfoSection img={valeur3}
        titre='Nos valeurs'
         desc={texte2}
         btn={{"btnTitre" :"Nous contacter",
          "btnLink":"/contacts"}}/>

       <QuoteSection texte="Chez Fidex, nous simplifions la logistique, facilitons l’achat et la vente de véhicules, et fournissons des ressources essentielles. 
                         Nos services répondent aux besoins du quotidien tout en soutenant le développement économique et en favorisant des solutions durables pour l'avenir."
                   img={about1}
                  isQuote={false}/>

       {/*Grid d'image */}
       <Reveal>
        <div class="grid grid-cols-1 gap-4 md:px-50 ">
            {/*Titre de la section - haut*/}
          <div className="flex flex-col gap-5 text-center md:px-10 items-center ">  
              <h1 className="lg:text-6xl text-4xl font-bold text-primary">On vous reçois dans nos locaux</h1>
              <p className="text-sm font-light max-w-4xl">Chez Fidex Distribution, nous mettons un point d'honneur à offrir à nos collaborateurs un environnement de travail moderne, fonctionnel et agréable. Installés au cœur de Kinshasa, nos locaux sont conçus pour favoriser la collaboration, la concentration et le bien-être au quotidien.</p>
            </div>

          <div className='grid md:grid-cols-2 gap-4'>
              <div>
                  <img className="h-auto max-w-full rounded-lg object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="image"/>
              </div>

              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="image"/>
              </div>

          </div>

          <div className='grid md:grid-cols-3 gap-4'>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="image"/>
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="image"/>
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="image"/>
              </div>
          </div>
        
        </div>
       </Reveal>
     
      <Map/>

      <ContactSection/>

    </div>
  )
}

export default About