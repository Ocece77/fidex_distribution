import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./Layout/MainLayout";

// Lazy loading pages
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Livraison = lazy(() => import("./pages/LivraisonPages/Livraison"));
const LivraisonEstimation = lazy(() => import("./pages/LivraisonPages/LivraisonEstimation"));
const LivraisonSuivie = lazy(() => import("./pages/LivraisonPages/LivraisonSuivi"));
const Vehicules = lazy(() => import("./pages/VehiculePages/Vehicules"));
const VehiculeDetails = lazy(() => import("./pages/VehiculePages/VehiculeDetails"));
const ExploitationMiniere = lazy(() => import("./pages/exploitationPages/ExploitationMiniere"));
const Engagements = lazy(() => import("./pages/exploitationPages/Engagements"));
const MineraisVendus = lazy(() => import("./pages/exploitationPages/MineraisVendus"));
const Expedition = lazy(() => import("./pages/ExpeditionPages/Expedition"));
const Garantie = lazy(() => import("./pages/ExpeditionPages/Garantie"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

  
  
const motionDivTransition = () => {
    return (  
      <>
     <ScrollToTop /> {/* scoll en haut de la page à chaque changement*/}

       <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />  

          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
        </> 
        )}

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout />}>
                    <Route
                    index
                    element={
                        <>
                        {motionDivTransition()}
                        <Homepage />
                        </>
                    }
                    />
                    <Route
                    path="about"
                    element={
                        <>
                        {motionDivTransition()}
                        <About />
                        </>
                    }
                    />
                    <Route
                    path="contacts"
                    element={
                        <>
                        {motionDivTransition()}
                        <Contacts />
                        </>
                    }
                    />
                    <Route
                    path="livraison"
                    element={
                        <>
                        {motionDivTransition()}
                        <Livraison />
                        </>
                    }
                    />
                    <Route
                    path="livraison/estimation"
                    element={
                        <>
                        {motionDivTransition()}
                        <LivraisonEstimation />
                        </>
                    }
                    />
                    <Route
                    path="livraison/suivi"
                    element={
                        <>
                        {motionDivTransition()}
                        <LivraisonSuivie />
                        </>
                    }
                    />
                    <Route
                    path="expedition"
                    element={
                        <>
                        {motionDivTransition()}
                        <Expedition />
                        </>
                    }
                    />
                    <Route
                    path="expedition/garantie"
                    element={
                        <>
                        {motionDivTransition()}
                        <Garantie />
                        </>
                    }
                    />
                    <Route
                    path="vehicules/:cat?"
                    element={
                        <>
                        {motionDivTransition()}
                        <Vehicules />
                        </>
                    }
                    />
                    <Route
                    path="vehicules/model/:id"
                    element={
                        <>
                        {motionDivTransition()}
                        <VehiculeDetails />
                        </>
                    }
                    />
                    <Route
                    path="exploitation_miniere"
                    element={
                        <>
                        {motionDivTransition()}
                        <ExploitationMiniere />
                        </>
                    }
                    />
                    <Route
                    path="exploitation_miniere/engagements"
                    element={
                        <>
                        {motionDivTransition()}
                        <Engagements />
                        </>
                    }
                    />
                    <Route
                    path="exploitation_miniere/minerais"
                    element={
                        <>
                        {motionDivTransition()}
                        <MineraisVendus />
                        </>
                    }
                    />
                    <Route
                    path="*"
                    element={
                        <>
                        {motionDivTransition()}
                        <ErrorPage />
                        </>
                    }
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    </>
  );
};

export default AppRoutes;
