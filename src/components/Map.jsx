import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react'


const information = {
  "email" : ["fidexdistribution@gmail.com" , faEnvelope],
  "adresse" : ["Urban Committee 5-C, Kinshasa-Gombe, RDC" , faLocationDot],
  "téléphone" : ["+233 1 23 45 67" , faPhone],
};

const Map = ({texte = "Récupérez votre colis dans notre agence" , desc = "Rendez-vous dans notre agence pour bénéficier d’un accompagnement personnalisé et découvrir nos services adaptés à vos besoins."})  =>{
  return (
  <section id="contact" className="xl:px-20 p-2.5 my-20">
    
     {/*Titre de la section - haut*/}
          <div className="flex flex-col gap-5 text-center">  
            <h1 className="lg:text-6xl text-4xl font-bold text-primary">{texte}</h1>
            <p className="text-sm font-light">{desc}.</p>
          </div>

     {/*container d'information - bas*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:px-30 md:px-10 px-2.5 h-full">

            {/*information */}
            <div className="flex flex-col gap-5.5">
                    {
                            Object.entries(information).map(([key,val] , i) =>{
                            return(
                                <div key={i} className='h-fit'>
                                    <div className='flex gap-3 py-4 px-1'>
                                    {/*logo */}
                                    <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon color="#002265" icon={val[1]} size="2xl" />
                                    </div>
                                    {/*Titre + info */}
                                        <div >
                                        <p className='w-1/2 font-bold capitalize'>{key}</p>
                                        <p className='underline text-sm'>{val[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                            })
                        }

                </div>
                
            {/* Map + Contact Info */}
            <div className="w-full xl:h-[35em] h-[27em] bg-blue-100 rounded-lg  items-end justify-start">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    src="https://maps.google.com/maps?q=Urban%20Committee%205-C,%20Kinshasa-Gombe,%20RDC&output=embed"
                    style={{ filter: "grayscale(0) contrast(1.2) opacity(0.6)" }}
              ></iframe>
              <div className='flex flex-col w-full text-end pt-3'>
                <p>Ouvert de <span className='text-red-900'>8h à 18h du lundi au samedi</span></p>
                <p>Fermée le<span className='text-red-900'>dimanche et les jours fériés</span></p>
              </div>
            </div>

        </div>
  </section>
  )
}


Map.propTypes = {
    texte : PropTypes.string
}
export default Map