import PropTypes from 'prop-types'
import React from 'react'

const QuoteSection = ({texte ="Exemple de contenu à mettre dans la section", img , reversed = false , isQuote = true}) => {
  return (
    <div className='flex bg-gray-100 h-fit py-20 '>
        <div className='relative'>

            <div className='grid lg:grid-cols-2 w-screen items-center justify-center lg:px-10 '>
              
                    {/*partie gauche - texte */}
     
                    <div className={`flex col-span-1 h-full items-center ${reversed ? "order-2  lg:-ml-30" : " lg:pl-30"}`}>
                        <div class="flex flex-col lg:w-[45vw] w-full md:h-[90%] h-full xl:p-15 p-10 bg-white border border-gray-200 rounded-lg shadow-sm  relative -mr-28   justify-center ">
                            <h5 class=" mb-2 text-2xl md:text-4xl lg:text-2xl xl:text-4xl 2xl:text-6xl lg:p-0 md:-5 font-bold tracking-tight text-dark-primary ">
                        {texte}
                            </h5>
                            <p class="font-normal text-gray-500">Janvier Mukasa...</p>
                        </div>
                    </div>

                    {/*partie droite - image */}
         
                      <div className='col-span-1 '>
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
QuoteSection.propTypes = {
  texte :PropTypes.string.isRequired,
  img :PropTypes.string.isRequired,
  direction : PropTypes.bool,
  isQuote :PropTypes.bool.isRequired,

}
export default QuoteSection