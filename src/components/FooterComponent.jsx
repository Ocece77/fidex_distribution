import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/logo.png";
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
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const information = {
  email: ["fidexdistribution@gmail.com", faEnvelope],
  adresse: ["Urban Committee 5-C, Kinshasa-Gombe", faLocationDot],
  téléphone: ["+233 1 23 45 67", faPhone],
};

const FooterComponent = ({ onCookieClick }) => {
  const { t } = useTranslation();

  const openLink = (key, value) => {
    if (key === "email") {
      window.location.href = `mailto:${value}`;
    } else if (key === "téléphone") {
      window.location.href = `tel:+2331234567`;
    } else if (key === "adresse") {
      const encodedAddress = encodeURIComponent(value);
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
        "_blank"
      );
    }
  };

  return (
    <Footer container className="bg-dark-primary rounded-none w-screen">
      <div className="w-full flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(information).map(([key, [value, icon]]) => (
            <div
              key={key}
              className="h-full w-full cursor-pointer"
              onClick={() => openLink(key, value)}
            >
              <div className="flex gap-3 bg-white hover:bg-red-800 hover:text-white transition-all py-4 px-3 h-full rounded shadow-sm">
                <div className="w-1/3 flex justify-center items-center">
                  <FontAwesomeIcon color="#8A0008" icon={icon} size="2xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold capitalize">{key}</p>
                  <p className="underline text-sm break-words">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center gap-20">
          <div>
            <img src={logo} alt="Fidex Distribution Logo" className="w-50" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 flex-col gap-5 w-screen px-10">
            <div>
              <FooterTitle title="Fidex" className="text-white" />
              <FooterLinkGroup col>
                <Link className="hover:underline"  to="/about">{t("footer.about")}</Link>
                <Link className="hover:underline"  to="/contacts">{t("footer.contact")}</Link>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                title={t("footer.new_vehicles")}
                className="text-white"
              />
              <FooterLinkGroup col>
                <Link className="hover:underline"  to="/vehicules/type/all">
                  {t("footer.all_vehicles")}
                </Link>
                <Link className="hover:underline"  to="/vehicules/type/suv">SUV & 4X4</Link>
                <Link className="hover:underline"  to="/vehicules/type/minibus">
                  {t("footer.minibus")}
                </Link>
                <Link className="hover:underline"  to="/vehicules/type/pickup">Pick up</Link>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle
                title={t("footer.shipping")}
                className="text-white"
              />
              <FooterLinkGroup col>
                <Link className="hover:underline"  to="/expedition">
                  {t("menu.shipping.links.services")}
                </Link>
                <Link className="hover:underline"  to="/expedition/garanties">
                  {t("menu.shipping.links.warranty")}
                </Link>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle
                title={t("footer.delivery")}
                className="text-white"
              />
              <FooterLinkGroup col>
                <Link className="hover:underline"  to="/livraison/estimation">{t("footer.estimate")}</Link>
                <Link className="hover:underline"  to="/livraison/suivi">{t("footer.track")}</Link>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title={t("footer.mining")} className="text-white" />
              <FooterLinkGroup col>
                <Link className="hover:underline"  to="/exploitation_miniere">{t("footer.buy_concession")}</Link>
                <Link className="hover:underline"  to="/exploitation_miniere/engagements">
                  {t("footer.commitments")}
                </Link>
                <Link className="hover:underline"  to="/exploitation_miniere/minerais">
                  {t("footer.minerals")}
                </Link>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />

             {/* Ajout des mentions légales */}
         <div className="flex flex-wrap gap-5 text-sm text-neutral-400 -mt-10">
             <Link  to="/legal/privacy_policy" className="flex justify-center items-center hover:underline">
            {t("footer.privacy")}
          </Link>
          
          <Link  to="/legal/legal_mentions" className="flex justify-center items-center hover:underline">
            {t("footer.legal")}
          </Link>

          <Link  to="/legal/terms_and_conditions" className="flex justify-center items-center hover:underline">
            {t("footer.terms")}
          </Link>

          <button onClick={onCookieClick} className="hover:underline capitalize">
               {t("footer.cookies")}
            </button>
        </div>


      </div>
    </Footer>
  );
};

FooterComponent.propTypes ={
  onCookieClick : PropTypes.func
}

export default FooterComponent;
