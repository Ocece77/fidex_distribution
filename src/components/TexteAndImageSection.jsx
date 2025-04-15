import PropTypes from 'prop-types'
import React from 'react'

const TexteAndImageSection = ({texte ="Exemple de contenu à mettre dans la section", img , isQuote = true}) => {
  return (
    <div className='flex bg-gray-100 h-fit py-20 '>
        <div className='relative'>


            {/*partie droite - image */}
            <div className='grid lg:grid-cols-2 w-screen items-center justify-center lg:px-10'>
                    {/*partie gauche - texte */}
                    <div className='flex col-span-1 lg:pl-30 h-full items-center'>
                        <div class="flex flex-col lg:w-[45vw] w-full md:h-[90%] xl:p-15 p-10 bg-white border border-gray-200 rounded-lg shadow-sm  relative -mr-28   justify-center ">
                            <h5 class=" mb-2 text-2xl md:text-4xl lg:text-2xl xl:text-5xl lg:p-0 md:-5 font-bold tracking-tight text-dark-primary ">
                        {texte}
                            </h5>
                            <p class="font-normal text-gray-500">Janvier Mukasa...</p>
                        </div>
                    </div>
               <div className='col-span-1'>
               <img
                    src={img}
                    alt="image"
                    className='min-h-100'
                />
               </div>
       
            </div>
        </div>

    </div>
  )
}
TexteAndImageSection.propTypes = {
  texte :PropTypes.string.isRequired,
  img :PropTypes.string.isRequired,
  isQuote :PropTypes.bool.isRequired,

}
export default TexteAndImageSection