import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiePopup = ({ visible, onAccept }) => {
  if (!visible) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter"
      cookieName="cookieAccepted"
      style={{ background: '#000e28', zIndex: 99999 }}
      buttonStyle={{
        backgroundColor: '#8a0008',
        color: 'white',
        fontSize: '13px',
        borderRadius: '5px',
        padding: '10px 20px',
      }}
      expires={365}
      onAccept={onAccept}
    >
      Nous utilisons des cookies pour améliorer votre expérience. En naviguant sur ce site, vous acceptez notre
      <a href="/privacy-policy" className="text-link-button"> Politique de confidentialité</a> et nos
      <a href="/terms-and-conditions" className="text-link-button"> Conditions d'utilisation</a>.
    </CookieConsent>
  );
};

export default CookiePopup;
