import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';

const HeaderComponent = ({titre, backgroundImage, desc, btns}) => {
  return (
    //En-tête / headers
    <section className="bg-transparent relative h-screen">
    <div className="flex justify-center items-center lg:gap-8 xl:gap-0 px-10 ">
        <div className="h-screen w-screen flex flex-col lg:col-span-7  items-center justify-center">

           {/*Titre & description*/}
           <div className='flex flex-col justify-center text-center '>
             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-9xl text-white ">{titre}</h1>
             <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white ">{desc}</p>
           </div>

            {/*Boutons d'action */}
            <div className='flex md:flex-row flex-col items-center md:gap-0 gap-2 '>
            {
                Object.entries(btns).map(([key,val],i)=>{
                  return (
                    <Link key={i} to={val} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-white hover:bg-red-800 hover:text-white hover:gap-5 gap-2 transition-all">
                    {key}
                      <svg className="w-5 h-5  -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                  );
                })
              }
         
            </div>

        </div>           
    </div>
 
    {/* Image */}
    <div className="absolute w-screen inset-0 -z-10 h-screen overflow-hidden">         
      <div className='absolute h-full w-full bg-black opacity-40'></div>
         <img src={backgroundImage} alt="backgroundImage" className='object-cover h-full w-full' />
        </div>     
    </section>
  )
}

HeaderComponent.propTypes= {
  titre :PropTypes.string.isRequired,
  desc :PropTypes.string.isRequired,
  btns :PropTypes.shape({
    label: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }),
}

export default HeaderComponent;