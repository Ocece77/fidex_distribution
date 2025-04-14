
import { faCommentAlt, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Navbar, NavbarBrand, NavbarCollapse, Dropdown, DropdownItem, NavbarToggle } from "flowbite-react";
import AppNavLink from "./AppNavLink";
import { faAngleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useWindowWidth } from "../utils/useWindowWidth";

const pageLinks = {
  'accueil' : "/",
  'à propos' : "/about",
  'véhicules' : "/vehicules",
  'Achat Concession' : "/exploitationMiniere",
  'livraison' : "/livraison",
};

const information = {
  "fidexdistribution@gmail.com" : faEnvelope,
  "Urban Committee 5-C, Kinshasa-Gombe" : faLocationDot
};

const styles = {
  borderRight: '1px solid rgba(255, 255, 255 , 0.7)',
};

const NavbarComponent = () => {

  const currScreenWidth = useWindowWidth() // Obtenir la valeur actuelle de l'écran
  
  return (
    <div className="fixed inset-x-0">
      {/*Bar d'information supplémentaire */}
      <div className="flex text-white justify-between bg-primary md:px-10 px-2 py-1 ">
        {/*Information - email -  adresse */}
          <div className="flex flex-col md:flex-row md:gap-2 ">
            {/*adresse email */}
            {Object.entries(information).map(([key,val] , i)=>{
              return (
                <div key={i} className="flex gap-1.5 text-[10px] md:text-sm pr-4 " style={{borderRight : `${i == 0 && currScreenWidth > 768 ? styles.borderRight :"none"}`}}>
                  <FontAwesomeIcon color="#8A0008" icon={val} size="lg" />
                  <p>{key}</p>
                 </div>
              )
            })}

          </div>

          {/*Dropdown de Selection du language */}
          <div>
            <Dropdown dismissOnClick={false} renderTrigger={() => <span className="font-light text-gray-300 text-[10px] md:text-sm">Français <FontAwesomeIcon icon={faAngleDown} size="sm"/></span>}>
              <DropdownItem className="text-[10px] md:text-sm">English</DropdownItem>
              <DropdownItem className="text-[10px] md:text-sm">Français</DropdownItem>
            </Dropdown>
          </div>
        </div>

       {/*Bar de navigation */}
        <Navbar fluid className="bg-white">
          
          {/*Logo de l'entreprise */}
            <NavbarBrand href="https://flowbite-react.com">
            {/*  <img src="" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />*/}
              <span className="self-center whitespace-nowrap text-xl font-semibold">FidexLogo</span>
            </NavbarBrand>
          
          <div className="md:flex md:gap-4 items-center">

                <div className="flex md:order-2">
                    {/*Boutton de Call To Action */}
                    <Button className="hidden md:flex hover:bg-red-900 bg-red-800 font-bold gap-3 py-6 transition-all ">
                      <FontAwesomeIcon icon={faCommentAlt} size="lg" />
                      <p>Parler à un expert <br /> +233 1 23 45 67</p>
                      </Button>
                    {/*Lien vers les pages */}
                    <NavbarToggle />
                  </div>


                  <div className="hidden md:flex list-none lg:gap-10 gap-4 lg:text-[16px] text-[12px] ">
                    {
                      Object.entries(pageLinks).map(([key, val]) =>{
                        return (
                        <AppNavLink key={key} to={val} texte={key}/>
                        );
                      })
                    }
                    
                  </div>

                </div>

                <NavbarCollapse className="md:hidden">
                    {
                      Object.entries(pageLinks).map(([key, val]) =>{
                        return (
                        <AppNavLink key={key} to={val} texte={key}/>
                        );
                      })
                    }
                    
                  </NavbarCollapse>


        </Navbar>
    </div>

  );
}

export default NavbarComponent;