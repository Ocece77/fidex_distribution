import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./Layout/MainLayout";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import LegalMentions from "./pages/legal/LegalMentions";
import TermsAndConditions from "./pages/legal/TermsAndConditions";

// Lazy loading pages
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Livraison = lazy(() => import("./pages/LivraisonPages/Livraison"));
const LivraisonEstimation = lazy(() =>
  import("./pages/LivraisonPages/LivraisonEstimation")
);
const LivraisonSuivie = lazy(() =>
  import("./pages/LivraisonPages/LivraisonSuivi")
);
const Vehicules = lazy(() => import("./pages/VehiculePages/Vehicules"));
const VehiculeDetails = lazy(() =>
  import("./pages/VehiculePages/VehiculeDetails")
);
const ExploitationMiniere = lazy(() =>
  import("./pages/exploitationPages/ExploitationMiniere")
);
const Engagements = lazy(() => import("./pages/exploitationPages/Engagements"));
const MineraisVendus = lazy(() =>
  import("./pages/exploitationPages/MineraisVendus")
);
const Expedition = lazy(() => import("./pages/ExpeditionPages/Expedition"));
const Garantie = lazy(() => import("./pages/ExpeditionPages/Garantie"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
};



const motionDivTransition = () => {
  return (
    <>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

const AppRoutes = () => {


  
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={useLocation()} key={useLocation().pathname}>
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
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="livraison" element={<Livraison />} />
            <Route
              path="livraison/estimation"
              element={<LivraisonEstimation />}
            />
            <Route path="livraison/suivi" element={<LivraisonSuivie />} />
            <Route path="expedition" element={<Expedition />} />
            <Route path="expedition/garanties" element={<Garantie />} />
            {/* Route dynamique pour les véhicules avec filtre par type et marque */}
            <Route path="vehicules/type/:cat" element={<Vehicules />} />
            <Route path="vehicules/marques/:brand" element={<Vehicules />} />
            <Route
              path="vehicules/type/:cat/marques/:brand"
              element={<Vehicules />}
            />

            <Route path="vehicules/model/:id" element={<VehiculeDetails />} />
            <Route
              path="exploitation_miniere"
              element={<ExploitationMiniere />}
            />
            <Route
              path="exploitation_miniere/engagements"
              element={<Engagements />}
            />
            <Route
              path="exploitation_miniere/minerais"
              element={<MineraisVendus />}
            />
            <Route path="*" element={<ErrorPage />} />
   
            <Route path="legal/legal_mentions" element={<LegalMentions />} />
            <Route path="legal/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="legal/terms_and_conditions" element={<TermsAndConditions />} />

          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;
