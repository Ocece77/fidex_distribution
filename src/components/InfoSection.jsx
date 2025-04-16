import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const InfoSection = ({img , subtitre , titre , desc , btn , reversed=false})  => {
  return (
    <div className=' h-full w-screen px-5 md:px-20 py-10'>
      <div className='grid md:grid-cols-2 h-full md:gap-10'>
          {/*col de gauche */}
          <div >
            <img src={img} alt={`image section - ${titre}`} className="w-full h-full lg:w-3/4 object-cover"/>
          </div>

         {/*col de droite */}
          <div className="flex flex-col gap-5 justify-center">
            {/*titre*/}
            {
              subtitre &&  (
                <p className="font-bold text-red-800">
                {titre}
              </p>
              )
            }
           

            {/*titre*/}
            <h1 className="lg:text-6xl md:text-3xl text-xl font-bold text-primary">
              {titre}
            </h1>

            {/*description*/}
            <p className="lg:text-base text-[12px] text-dark-primary ">
             {desc}
            </p>

            {/*btn*/}
            {
              btn &&
              (
                <Link to={btn.btnLink} className="inline-flex items-center justify-center max-w-fit px-5 py-2 mr-3 text-sm font-medium text-center rounded-lg bg-red-800 text-white transition-all ">
                 {btn.btnTitre}
                </Link>
              )
            }
          

          </div>


      </div>
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

export default InfoSection
