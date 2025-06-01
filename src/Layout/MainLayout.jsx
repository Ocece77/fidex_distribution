import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import ChatWidget from "../components/ChatWidget";
import CookiePopup from "../pages/legal/CookiePopup";

const MainLayout = () => {

  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    const hasAccepted = document.cookie.includes('cookieAccepted=true');
    if (!hasAccepted) {
      setShowCookiePopup(true);
    }
  }, []);

  const handleAccept = () => {
    setShowCookiePopup(false);
  };

  return (
    <>
      <NavbarComponent />
      <main >
        <Outlet /> {/* Les pages s’affichent ici */}
        <ChatWidget/>

      </main>

      <FooterComponent onCookieClick={() => setShowCookiePopup(true)} />
      <CookiePopup visible={showCookiePopup} onAccept={handleAccept} />
    </>
  );
}

export default MainLayout;
