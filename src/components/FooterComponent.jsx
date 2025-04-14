import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import logo from '../assets/logo.png'

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const information = {
  "email" : ["fidexdistribution@gmail.com" , faEnvelope],
  "adresse" : ["Urban Committee 5-C, Kinshasa-Gombe" , faLocationDot],
  "téléphone" : ["+233 1 23 45 67" , faPhone],
};

const FooterComponent = () => {
  return (
    <Footer container className='bg-dark-primary rounded-none w-screen'>
      <div className="w-full flex flex-col gap-10">
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>

          {/*carte d'information */}
          {
            Object.entries(information).map(([key,val] , i) =>{
              return(
                <div key={i} className='h-full w-full'>
                <div className='flex gap-3 bg-white hover:bg-red-800 hover:text-white transition-all py-4 px-1 h-full '>
                  {/*logo */}
                  <div className='w-1/3 flex justify-center items-center'>
                   <FontAwesomeIcon color="#8A0008" icon={val[1]} size="2xl" />
                  </div>
                  {/*Titre + info */}
                    <div >
                      <p className='w-1/2font-bold capitalize'>{key}</p>
                       <p className='underline text-sm'>{val[0]}</p>
                    </div>
                </div>
              </div>
              );
            })
          }
     

        </div>

        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center gap-20">
          {/*Logo */}
          <div>
            <img
                src={logo}
                alt="Fidex Distribution Logo"
                className='w-50'
              />
          </div>

           {/*Lien */}
          <div className="grid grid-cols-2 md:grid-cols-4 flex-col gap-5 w-screen px-10
          ">
            <div>
              <FooterTitle title="Fidex" className='text-white'/>
              <FooterLinkGroup col>
                <FooterLink href="#">À propos</FooterLink>
                <FooterLink href="#">Contactez-nous</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Véhicules neufs" className='text-white'/>
              <FooterLinkGroup col>
                <FooterLink href="#">Toutes nos voiture</FooterLink>
                <FooterLink href="#">SUV & 4X4</FooterLink>
                <FooterLink href="#">Mini Van et bus</FooterLink>
                <FooterLink href="#">Pick up</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Exploitation Minière" className='text-white'/>
              <FooterLinkGroup col>
                <FooterLink href="#">Solutions pétrolière</FooterLink>
                <FooterLink href="#">Achat concession minière</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Livraison" className='text-white'/>
              <FooterLinkGroup col>
                <FooterLink href="#">Estimation</FooterLink>
                <FooterLink href="#">Suivre</FooterLink>
              </FooterLinkGroup>
            </div>

          
          </div>

        </div>

        <FooterDivider />

        {/*Mention légales */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Fidex distribution™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-gray-500 list-none">
          <FooterLink href="#">Mention légales </FooterLink>
          <FooterLink href="#">Termes &amp; Conditions</FooterLink>
          </div>
        </div>

      </div>
    </Footer>
  );
}


export default FooterComponent