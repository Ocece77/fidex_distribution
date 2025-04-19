import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

// Pages principales
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

// Livraison
import Livraison from "./pages/LivraisonPages/Livraison";
import LivraisonEstimation from "./pages/LivraisonPages/LivraisonEstimation";
import LivraisonSuivie from "./pages/LivraisonPages/LivraisonSuivi";

// Véhicules
import Vehicules from "./pages/VehiculePages/Vehicules";
import VehiculeDetails from "./pages/VehiculePages/VehiculeDetails";
import ExploitationMiniere from './pages/exploitationPages/ExploitationMiniere';
import ErrorPage from './pages/ErrorPage';

import Lenis from "lenis";
import { useEffect } from 'react';
import { ThemeConfig } from 'flowbite-react';

const App = () => {
  useEffect(() => {
    // Initialise Lenis pour le smooth scrolling
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
  <ThemeConfig dark={false} />
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />

          {/* Livraison */}
          <Route exact path="livraison" element={<Livraison />} />
          <Route path="livraison/estimation" element={<LivraisonEstimation />} />
          <Route path="livraison/suivi" element={<LivraisonSuivie />} />

          {/* Véhicules */}
          <Route exact path="vehicules" element={<Vehicules />} />
          <Route path="vehicules/:id" element={<VehiculeDetails />} />

          {/* Exploitation Minière */}
          <Route path="exploitationMiniere" element={<ExploitationMiniere />} />
          

          {/* 404 fallback */}
          <Route path="*" element={<ErrorPage />} />
        </Route> 
      </Routes>
    </Router>
</>

  );
};

export default App;