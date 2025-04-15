import PropTypes from 'prop-types'
import React from 'react'

const InfoSection = ({img , subtitre , titre , desc , btn})  => {
  return (
    <div className=' h-[70vh] w-screen bg-amber-500 px-50'>
      <div className='grid grid-cols-2'>

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
  })
}

export default InfoSection
