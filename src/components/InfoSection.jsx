import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../animation/Reveal'

const InfoSection = ({img , subtitre , titre , desc , btn , reversed=false , darkBg = false})  => {
  return (
    <div className={`${darkBg ? "bg-dark-primary" : "bg-white"} h-full w-screen px-5 md:px-20 `}>
     <Reveal>
      <div className='grid md:grid-cols-2 h-full gap-10 max-w-7xl mx-auto'>
            {/*col de gauche */}
              <div className={`flex lg:justify-end lg:pr-10 justify-center ${reversed ? "order-2" : ""}`} >
                <img src={img} alt={`image section - ${titre}`} className="w-full md:h-[60vh] max-w-lg object-cover"/>
              </div>

          {/*col de droite */}
            <div className="flex flex-col gap-5 justify-center max-w-2xl">
              {/*titre*/}
              {
                subtitre &&  (
                  <p className="font-bold text-red-800 text-2xl">
                  {subtitre}
                </p>
                )
              }
            
              {/*titre*/}
              <h1 className={`lg:text-5xl text-2xl md:text-start text-center font-bold ${darkBg ?  "text-white" : "text-primary" }  `}>
                {titre}
              </h1>

              {/*description*/}
              <p className={`lg:text-base md:text-start text-center ${darkBg ?  "text-white" : "text-dark-primary" } `}>
               {desc}
              </p>

              {/*btn*/}
              <div className="w-full flex md:justify-start justify-center">
              {
                btn &&
                (
                  <Link to={btn.btnLink} className={`inline-flex items-center justify-center max-w-fit px-5 py-2 mr-3 text-sm font-medium text-center rounded-lg bg-red-800 text-white transition-all ${darkBg ?  "hover:text-red-800 hover:bg-white" : "hover:bg-primary" } hover:ps-5`}>
                  {btn.btnTitre}
                  <svg className="w-3 h- ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                )
              }
              </div>

            

            </div>
        </div>
      </Reveal>
    </div>
  )
}

InfoSection.propTypes = {
  img : PropTypes.string.isRequired,
  subtitre: PropTypes.string ,
  titre : PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired ,
  btn : PropTypes.shape({
    btnTitre : PropTypes.string.isRequired,
    btnLink : PropTypes.string.isRequired
  }),
  reversed:  PropTypes.bool.isRequired,
}

export default InfoSection;
