import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import vehicule from '../assets/photos/vehicules/vehicule2.jpg'
import { Link } from 'react-router-dom';

const logoMarques = [
    { liendulogo: "/vehicule/marques/lexus", logo: 'https://www.logo-voiture.com/wp-content/uploads/2021/01/Lexus-logo-1988-1920x1080-grand.png' },
    { liendulogo: "/vehicule/marques/hyundai", logo: 'https://www.logo-voiture.com/wp-content/uploads/2023/03/Hyundai-logo-bleu-1024x768.jpeg' },
    { liendulogo: "/vehicule/marques/ford", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png' },
    { liendulogo: "/vehicule/marques/land-rover", logo: 'https://upload.wikimedia.org/wikipedia/fr/3/3e/Nouveau_logo_Land_Rover.jpg' },
    { liendulogo: "/vehicule/marques/mercedes", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/1200px-Mercedes-Benz_Star_2022.svg.png' },
    { liendulogo: "/vehicule/marques/toyota", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/2560px-Toyota_logo_%28Red%29.svg.png' },
    { liendulogo: "/vehicule/marques/nissan", logo: 'https://logo-marque.com/wp-content/uploads/2020/04/Nissan-Logo-2001%E2%80%93pr%C3%A9sent.jpg' },
  ];
  
const VehicleOfferHeader = () => {
  return (
    <section className="pt-30 fixed -top-1 inset-x-0 z-999">
      <div className="w-full mx-auto py-4 ">
        
        <section className="grid grid-cols-3 gap-5 w-full items-center justify-evenly bg-dark-primary md:px-20 py-7">
          <Link to="/vehicules/suv" className="flex flex-col items-center text-white hover:text-red-900 transition-all ">
            <FontAwesomeIcon icon={faCar} className='fa-3x'/>
            <span className="text-sm mt-1">SUV & 4x4</span>
          </Link>

          <Link to="/vehicules/minibus"  className="flex flex-col items-center text-white hover:text-red-900  transition-all">
            <FontAwesomeIcon icon={faBus} className='fa-3x'/>
            <span className="text-sm mt-1">Mini bus & van</span>
          </Link>

          <Link to="/vehicules/pickup"  className="flex flex-col items-center  text-white hover:text-red-900 transition-all">
            <FontAwesomeIcon icon={faTruckPickup} className='fa-3x'/>
            <span className="text-sm mt-1">Pick Up</span>
          </Link>
        </section>

        <section className="flex flex-wrap items-center gap-5 justify-around  md:px-20 px-2.5 py-5 bg-white sha">
            {logoMarques.map((logo , i)=>{
                return (
                    <img key={i} src={logo.logo} alt="voiture" className="md:h-8 h-6" />
                )
            })}
        </section>
      </div>
    </section>
  );
}

const HeroSection = () => {
  return (
    <section className='relative h-100 overflow-hidden flex items-center justify-center'>
    <div
    className="absolute top-0 inset-x-0 w-full h-full bg-cover  bg-center z-0 brightness-70"
    style={{
         backgroundImage: `url(${vehicule})` 
    }}
    ></div>

      <div className="z-10 inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 text-white ">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Découvrez nos offres de véhicules neufs,
        </h2>
        <p className="text-white font-bold text-xl mt-2 sm:text-2xl lg:text-3xl">
          disponible autour de vous
        </p>
        <p className="max-w-5xl mt-4 sm:text-lg">
          Comparez plusieurs offres pour trouver facilement votre véhicule idéal, puis prenez rendez-vous
          avec nos experts pour finaliser votre choix.
        </p>
      </div>
      </section>
  );
}

const VehiculesHeader = () => {
  return (
    <section className='pt-80'>
      <VehicleOfferHeader />
      <HeroSection />
    </section>
  );
}

export default VehiculesHeader;