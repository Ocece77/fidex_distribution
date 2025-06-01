import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import data from '../dataTest/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//logo de marques

const logoMarques = [
  { liendulogo: "/vehicules/marques/ford", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png' },
  { liendulogo: "/vehicules/marques/toyota", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/2560px-Toyota_logo_%28Red%29.svg.png' },
  { liendulogo: "/vehicules/marques/nissan", logo: 'https://logo-marque.com/wp-content/uploads/2020/04/Nissan-Logo-2001%E2%80%93pr%C3%A9sent.jpg' },
];

const vehiculesToDisplay = [data[0] , data[5] , data[1]]; // vehicules à afficher

//logo cloud
const logoCloud = () =>{
   return (

      <div className=" flex mx-auto w-full  py-5 px-6 lg:px-8 justify-center">
        <div className="grid grid-cols-3 max-w-4xl justify-center items-center gap-5">
                       {logoMarques.map((logo , i)=>{
                                          return (
                                            <Link key={i}to={logo.liendulogo} className='flex-1 flex justify-center'>
                                              <img  src={logo.logo} alt="voiture" 
                                                    height={48}
                                                    className="col-span-2 max-h-12 object-contain lg:col-span-1 cursor-pointer  md:w-[158px] w-fit"/>
                                              </Link>
                                          )
                                      })}
    
        </div>
      </div>

   )
}

// page du carousel pour chaque voiture
const VehiculesCarousel = (vehicules) =>{
  const { t } = useTranslation(); // Utilisation du hook i18next

  return(
    vehicules.map((vehicule , i) => (
      <div key={i} className='h-full flex items-center justify-center bg-gray-100'>
            <div className="w-screen">
              <div key={vehicule.id} className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between md:max-w-full max-w-4/5  p-10 md:max-h-1/2 lg:gap-30 gap-5">

                  <div>
                    <img src={vehicule.image} alt={vehicule.name} className="lg:max-w-lg max-w-[20rem] object-contain" />
                  </div>

                  <div className="flex flex-col gap-4">
                      
                      <span className="text-sm text-gray-600">
                        {t('carousel.motorisation')} : <span className="px-2 py-1 bg-red-100 text-red-600 rounded">{vehicule.fuel}</span>
                      </span>

                      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-neutral-800 md:w-4/5">{vehicule.name}</h2>

                      <Link
                           to={{
                               pathname:`/vehicules/model/${vehicule.id}`,
                              state: { vehicule: vehicule }  }}  
                              className="flex items-center text-sm bg-primary text-white px-4 py-2 rounded w-fit hover:bg-red-800 transition-all hover:ps-5">
                         {t('carousel.cta')}
                       <svg className="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                  
                      <p className="text-lg font-semibold">
                      {t('carousel.description')} <span className="text-red-800 text-2xl">{vehicule.price}$</span>
                      </p>

                      <Link to="/contacts" className="flex items-center text-sm underline gap-1 hover:text-primary">
                      <FontAwesomeIcon icon={faLocation}/>
                      {t('carousel.findAgency')}</Link>

                  </div>

                </div>
              </div>
         </div>
      </div>
    ))
  )
}
//flèche droite
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}

//flèches gauche
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

// carousel
const Carousel = ({titre , desc , items=[] , showLogoCloud=true , showVehicules=true}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container w-screen flex flex-col justify-center md:px-10 relative gap-5 ">
  
          {/*Titre*/}
          <div className="flex flex-col w-full text-center justify-center items-center px-5">  
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-primary max-w-2xl">{titre}</h1>
            <p className="text-base font-light max-w-2xl">{desc}</p>
          </div>
     

           {/*logo de marques*/}
           {showLogoCloud && logoCloud()}


          {/*Carousel*/}
          <Slider {...settings} className='bg-gray-100'>

                {showVehicules && VehiculesCarousel(vehiculesToDisplay)}

                {!showVehicules && items &&  
                  items.map((item , i) =>{
                    return (
                      <div key={i} className='h-[60vh] flex items-center justify-center'>
                        <div className="h-[60vh] w-screen bg-gray-200">
                          <p>rien à afficher</p>
                        </div>
                    </div>
                    )
                  })
                }
          </Slider>

    
    </div>
  );
}

Carousel.propTypes={
  texte: PropTypes.string, 
  desc: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  logoCloud: PropTypes.arrayOf(PropTypes.string),
  showLogoCloud : PropTypes.bool,
  showVehicules : PropTypes.bool,
}

export default Carousel;
