import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { ThemeConfig } from "flowbite-react";

import { MotionGlobalConfig } from "framer-motion";

import AppRoutes from './AppRoutes';




// Désactiver les animations sur mobile
const disableAnimationsOnMobile = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    MotionGlobalConfig.skipAnimations = true;
  }
};

const App = () => {

  useEffect(() => {
    disableAnimationsOnMobile();

    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>          
      <ThemeConfig dark={false} />
        <Router >
            <AppRoutes/>
        </Router>
    </>
  );
};

export default App;
