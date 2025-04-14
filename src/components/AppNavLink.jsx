import { useLinkClickHandler, useLocation } from "react-router-dom";
import { NavbarLink } from "flowbite-react";
import PropTypes from "prop-types";
import { useWindowWidth } from "../utils/useWindowWidth";
import { useEffect, useState } from "react";

export default function AppNavLink({ to, texte }) {
  const location = useLocation(); // récupération de la page actuelle
  const clickHandler = useLinkClickHandler(to);
  const screenWidth = useWindowWidth(); // récupération la largeur de l'écran actuelle

  const isActive = location.pathname === to; // détecte si l'on ce situe sur la page du lien

  const [currStyle, setCurrStyle] = useState({}); // change le style du lien

  const activeStyle = { // Style écran Tablette et PC
    color: "#8a0008",
  };

  const mobileActiveStyle = { // Style écran mobile
    backgroundColor: "#8a0008",
    color: "white",
  };

  const updateStyle = () => {
    if (isActive && screenWidth < 768) {  // Uniquement pour mobile
      setCurrStyle(mobileActiveStyle);
    } else if (isActive && screenWidth > 768){ // Uniquement pour Tablette/pc & plus
        setCurrStyle(activeStyle);
    }else {
      setCurrStyle({});
    }
  };

  useEffect(() => {
    updateStyle();
  }, [screenWidth, isActive]);

  return (
    <span onClick={clickHandler}>
      <NavbarLink
        href={to}
        style={currStyle}
        className="capitalize transition-all"
      >
        {texte}
      </NavbarLink>
    </span>
  );
}

AppNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};
