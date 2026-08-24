import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const QuoteSection = ({titre ,texte ="Exemple de contenu à mettre dans la section", btn={"label" : "" ,"href" : "/about"}, img, reversed = false, isQuote = false}) => {
   const { t } = useTranslation();
 
 
  return (
    <div className='flex items-center mx-auto bg-gray-100 h-fit md:p-20 p-5 '>
        <div className='relative '>

            <div className='grid lg:grid-cols-2 items-center justify-center mx-auto'>
              
                    {/*partie gauche - texte */}
                    <div className={`flex col-span-1  md:h-[60vh] lg:h-[90%]  items-center ${reversed ? "order-2 lg:-ml-60 lg:px-30" : ""} `}>
                        <div className="flex flex-col justify-center h-full lg:px-20 md:p-10 p-5 bg-white border border-gray-200 lg:rounded-lg shadow-sm relative lg:-mr-28 gap-5 ">
                            <h1 className="lg:text-4xl text-3xl font-bold tracking-tight text-primary ">
                              {titre}
                            </h1>
                            <h5 className={`${isQuote && "font-bold"} text-2xl lg:text-3xl xl:text-3xl lg:p-0 md:p-5  tracking-tight text-dark-primary`}>
                               {texte}
                            </h5>
                             
                            <Link to={btn.href} className="flex items-center justify-center max-w-fit text-md font-medium text-center border-b-2 border-red-800 transition-all hover:text-red-800 hover:gap-5 gap-2 capitalize">
                              {btn.label || t("btn")}
                              <svg className="w-3 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                              </Link>
                            

                            {/*si il s'agit d'une citation - ajout de la source */}
                           {isQuote && (
                            <div className='flex items-center gap-4 pt-5 border-t-1 border-neutral-200 '>
                              <img className="w-10 h-10 rounded-full" src="https://media.licdn.com/dms/image/v2/C4E03AQFqWM-wYzrrKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1533663785394?e=1750291200&v=beta&t=G0F65S3rdgKVoEKRuPcNJhIMqfwICtaljt8vUEJkWHg" alt="Rounded avatar"/>
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
                            className='max-h-70 lg:max-h-170 object-cover w-full lg:rounded-lg '
                        />
                      </div>
               
            </div>

        </div>

    </div>
  )
}
QuoteSection.propTypes = {
  titre:PropTypes.string.isRequired,
  texte :PropTypes.string.isRequired,
  btn :PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  img :PropTypes.string.isRequired,
  direction : PropTypes.bool,
  isQuote :PropTypes.bool.isRequired,

}
export default QuoteSection