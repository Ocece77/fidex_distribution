
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

// Pages principales
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

// Livraison
import Livraison from "./pages/LivraisonPages/Livraison";
import LivraisonEstimation from "./pages/LivraisonPages/LivraisonEstimation";
import LivraisonSuivie from "./pages/LivraisonPages/LivraisonSuivie";

// Véhicules
import Vehicules from "./pages/VehiculePages/Vehicules";
import VehiculeDetails from "./pages/VehiculePages/VehiculeDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout principal avec Header/Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />

          {/* Livraison */}
          <Route path="livraison" element={<Livraison />} />
          <Route path="livraison/estimation" element={<LivraisonEstimation />} />
          <Route path="livraison/suivie" element={<LivraisonSuivie />} />

          {/* Véhicules */}
          <Route path="vehicules" element={<Vehicules />} />
          <Route path="vehicules/:id" element={<VehiculeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
