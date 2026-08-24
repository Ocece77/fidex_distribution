import { useParams } from "react-router-dom";
import VehiculeDetailsSection from "../../components/VehiculeDetailsSection";
import VehiculesHeader from "../../components/VehiculesHeader";
import VehiculesSection from "../../components/VehiculesSection";
import Map from "../../components/Map";
import ContactSection from "../../components/ContactSection";

function VehiculeDetails() {
  const { id } = useParams();

  return (
    <section>
      <VehiculesHeader/>
      <VehiculeDetailsSection id={id}/>
      <Map/>
     <ContactSection/>
    </section>
  );
}

export default VehiculeDetails;
