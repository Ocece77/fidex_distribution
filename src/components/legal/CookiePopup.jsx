import React from 'react';
import CookieConsent from 'react-cookie-consent'; // Importer le package

const CookiePopup = () => {
  return (
    <CookieConsent
      location="bottom" // Afficher le popup en bas de la page
      buttonText="Accepter" // Texte du bouton d'acceptation
      cookieName="cookieAccepted" // Nom du cookie
      style={{ background: '#000e28', zIndex:99999 }} // Style du popup
      buttonStyle={{
        backgroundColor: '#8a0008',
        color: 'white',
        fontSize: '13px',
        borderRadius: '5px',
        padding: '10px 20px',
      }}
      expires={1} // Durée de vie du cookie en jours
    >
      Nous utilisons des cookies pour améliorer votre expérience. En naviguant sur ce site, vous acceptez notre
      <a href="/privacy-policy" className="text-link-button"> Politique de confidentialité</a> et nos
      <a href="/terms-and-conditions" className="text-link-button"> Conditions d'utilisation</a>.
    </CookieConsent>
  );
};

export default CookiePopup;
