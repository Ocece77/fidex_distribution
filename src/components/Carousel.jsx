import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import Reveal from '../animation/Reveal';
import vehiculeData from '../dataTest/vehiculeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
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

const logoCloud = () =>{
   return (
    <div className="py-5 mx-auto ">
      <div className="flex mx-auto w-full px-6 lg:px-8 justify-center">
        <div className="flex flex-wrap max-w-4xl justify-center">
          {logoMarques.map((marques , i) =>{
            return (
              <img
                key={i}
                alt={marques.logo}
                src={marques.logo}
                height={48}
                className="col-span-2 max-h-12 object-contain lg:col-span-1 cursor-pointer  md:w-[158px] w-1/3"
              />
            )
          })}
        </div>
      </div>
  </div>
   )
}
const vehiculesCarousel = (vehicules) =>{
  return(
    vehicules.map((vehicule , i) => (
      <div key={i} className='h-fit flex items-center justify-center bg-gray-100'>
            <div className="w-screen">
              <div key={vehicule.id} className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between md:max-w-full max-w-4/5  p-10 md:max-h-1/2 lg:gap-30 gap-5">

                  <div>
                    <img src={vehicule.image} alt={vehicule.nom} className="lg:max-w-lg max-w-[20rem] object-contain" />
                  </div>

                  <div className="flex flex-col gap-4">
                      
                      <span className="text-sm text-gray-600">
                        Motorisation : <span className="px-2 py-1 bg-red-100 text-red-600 rounded">{vehicule.motorisation}</span>
                      </span>

                      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-neutral-800 md:w-4/5">{vehicule.nom}</h2>

                      <Link href={vehicule.lien} className="flex items-center text-sm bg-primary text-white px-4 py-2 rounded w-fit hover:bg-red-800 transition-all hover:ps-5">
                         Découvrir le véhicule
                       <svg className="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                  
                      <p className="text-lg font-semibold">
                        à partir de <span className="text-red-800">{vehicule.prix}</span>
                      </p>

                      <a href="/contacts" className="flex items-center text-sm underline gap-1 hover:text-primary">
                      <FontAwesomeIcon icon={faLocation}/>
                      Trouver une agence</a>

                  </div>

                </div>
              </div>
         </div>
      </div>
    ))
  )
}

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


const Carousel = ({titre , desc , items=[] , showLogoCloud=true , showVehicules=true}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container w-screen flex flex-col justify-center md:px-10 relative gap-5 ">
        <Reveal>
          {/*Titre*/}
          <div className="flex flex-col w-full text-center justify-center items-center ">  
            <h1 className="lg:text-6xl text-4xl font-bold text-primary max-w-2xl">{titre}</h1>
            <p className="text-base font-light max-w-2xl">{desc}</p>
          </div>
        </Reveal>

        <Reveal>
           {showLogoCloud && logoCloud()}
        </Reveal>

        <Reveal>
          <Slider {...settings} className='bg-gray-100'>

                {showVehicules && vehiculesCarousel(vehiculeData)}

                {!showVehicules && items &&  
                  items.map((item , i) =>{
                    return (
                      <div key={i} className='h-[50vh] flex items-center justify-center'>
                        <div className="h-[50vh] w-screen bg-gray-200">
                          <p>Contenue</p>
                        </div>
                    </div>
                    )
                  })
                }
          </Slider>
        </Reveal>
    
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
