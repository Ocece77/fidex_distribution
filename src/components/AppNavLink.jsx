import { useLinkClickHandler } from "react-router-dom";
import { NavbarLink } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function AppNavLink({  to, texte, className }) {
  const clickHandler = useLinkClickHandler(to);

  const [scrollStyle , setScrollStyle] = useState(false)

  const listenScrollEvent = () => {
    window.scrollY > 50 ? setScrollStyle(true) : setScrollStyle(false);
  };

 
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  

  return (
    <span onClick={clickHandler}>
      <NavbarLink
        href={to}
        className={`capitalize text-sm font-medium transition duration-200 border-b-2 ${scrollStyle ? "text-black" : "text-white"} transition-all ${className}`}
      >
        {texte}
      </NavbarLink>
    </span>
  );
}

AppNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
