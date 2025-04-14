import {useLinkClickHandler, useLocation} from "react-router-dom";
import {  NavbarLink } from "flowbite-react";
import PropTypes from 'prop-types';


export default function AppNavLink({ to , texte }) {
    const location = useLocation();
    const clickHandler = useLinkClickHandler(to);
    
    return <span onClick={clickHandler}>
        <NavbarLink key={to} className=" text-primary capitalize transition-all hover:text-primary" href={to} active={location.pathname === to}>
            {texte}
        </NavbarLink>
    </span>;
}
AppNavLink.propTypes = {
    key :  PropTypes.number.isRequired,
    to : PropTypes.string.isRequired,
    texte : PropTypes.string.isRequired,

}
