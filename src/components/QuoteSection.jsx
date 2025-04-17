import PropTypes from 'prop-types'
import React from 'react'

const QuoteSection = ({texte ="Exemple de contenu à mettre dans la section", img , reversed = false , isQuote = false}) => {
  return (
    <div className='flex items-center mx-auto bg-gray-100 h-screen py-20 '>
        <div className='relative'>

            <div className='grid lg:grid-cols-2 lg:max-w-5/6 items-center justify-center lg:px-10 mx-auto '>
              
                    {/*partie gauche - texte */}
                    <div className={`flex col-span-1 h-full items-center ${reversed ? "order-2 lg:-ml-60 lg:px-30" : " lg:pl-20"}`}>
                        <div className="flex flex-col lg:w-[50vw] w-full lg:h-[85%] h-full p-7 bg-white border border-gray-200 lg:rounded-lg shadow-sm relative -mr-28   justify-center ">
                            <h5 className=" mb-2 text-2xl md:text-4xl lg:text-2xl xl:text-3xl lg:p-0 md:-5 font-bold tracking-tight text-dark-primary ">
                               {texte}
                            </h5>
                           {isQuote && (
                            <div className='flex items-center gap-4 pt-5'>
                              <img class="w-10 h-10 rounded-full" src="https://media.licdn.com/dms/image/v2/C4E03AQFqWM-wYzrrKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1533663785394?e=1750291200&v=beta&t=G0F65S3rdgKVoEKRuPcNJhIMqfwICtaljt8vUEJkWHg" alt="Rounded avatar"/>
                                <div>
                                 <p className="font-normal text-gray-500">Janvier Mukasa</p>
                                 <p className="font-normal text-gray-500 text-sm">CEO de Fidex Distribution</p>
                                </div>
                            </div>
                          )}
                        </div>
                    </div>

                    {/*partie droite - image */}
         
                      <div className='col-span-1 w-full'>
                      <img
                            src={img}
                            alt="image"
                            className='min-h-100 object-cover w-full lg:rounded-lg'
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