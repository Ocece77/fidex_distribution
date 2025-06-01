import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vehicule from '../assets/photos/vehicules/vehicule2.jpg';
import { Link } from 'react-router-dom';
import { vehiculeTypeIcons } from "../dataTest/data"; 
import { useTranslation } from 'react-i18next'; 

const logoMarques = [
    { liendulogo: "/vehicules/marques/ford", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png' },
    { liendulogo: "/vehicules/marques/toyota", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/2560px-Toyota_logo_%28Red%29.svg.png' },
    { liendulogo: "/vehicules/marques/nissan", logo: 'https://logo-marque.com/wp-content/uploads/2020/04/Nissan-Logo-2001%E2%80%93pr%C3%A9sent.jpg' },
  ];

const VehicleOfferHeader = () => {
  const { t } = useTranslation(); 

  return (
    <section className="inset-x-0 z-999 ">
      <div className="w-full mx-auto">
        <section className="grid grid-cols-4 max-w-5xl mx-auto items-center justify-evenly bg-dark-primary md:px-20 py-7">

          <Link to="/vehicules/type/suv" className="flex flex-col items-center text-white hover:text-red-900 transition-all ">
            <FontAwesomeIcon icon={vehiculeTypeIcons.suv} className='fa-3x'/>

            <span className="text-sm mt-1">{t('vehicules.header.types.suv')}</span>
          </Link>

          <Link to="/vehicules/type/4x4" className="flex flex-col items-center text-white hover:text-red-900 transition-all "> 
            <FontAwesomeIcon icon={vehiculeTypeIcons["4x4"]} className='fa-3x'/>

            <span className="text-sm mt-1">{t('vehicules.header.types.fourByFour')}</span>
          </Link>

          <Link to="/vehicules/type/pickup" className="flex flex-col items-center  text-white hover:text-red-900 transition-all">
            <FontAwesomeIcon icon={vehiculeTypeIcons.pickup} className='fa-3x'/>

            <span className="text-sm mt-1">{t('vehicules.header.types.pickup')}</span>
          </Link>

          <Link  to="/vehicules/type/minibus" className="flex flex-col items-center text-white hover:text-red-900  transition-all">
            <FontAwesomeIcon icon={vehiculeTypeIcons.minibus} className='fa-3x'/>

            <span className="text-sm mt-1">{t('vehicules.header.types.minibusVan')}</span>
          </Link>

        </section>

        <section className=" md:px-20 px-2.5 py-5 bg-white">
          <div className='max-w-2xl mx-auto flex flex-wrap items-center justify-evenly'>
                {logoMarques.map((logo , i)=>{
                                return (
                                  <Link key={i} to={logo.liendulogo}>
                                    {/* Use translation key for alt text */}
                                    <img src={logo.logo} alt={t('vehicles.header.alt.brandLogo')} className="md:h-10 h-6" />
                                  </Link>
                                )
                            })}
          </div>
        </section>

      </div>
    </section>
  );
}

const HeroSection = () => {
  const { t } = useTranslation(); 
  return (
    <section className='relative h-100 overflow-hidden flex items-center justify-center '>
    <div
    className="absolute top-0 inset-x-0 w-screen h-full bg-cover bg-center z-0 brightness-70"
    style={{
         backgroundImage: `url(${vehicule})`
    }}
    ></div>

      <div className="z-10 inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 text-white ">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          {t('vehicules.header.hero.title')}
        </h2>
        <p className="text-white font-bold text-xl mt-2 sm:text-2xl lg:text-3xl">
          {t('vehicules.header.hero.subtitle')}
        </p>
        <p className="max-w-5xl mt-4 sm:text-lg">
          {t('vehicules.header.hero.description')}
        </p>
      </div>
      </section>
  );
}

const VehiculesHeader = () => {
  return (
    <section className='pt-30 bg-dark-primary'>
      <VehicleOfferHeader />
      <HeroSection />
    </section>
  );
}

export default VehiculesHeader;