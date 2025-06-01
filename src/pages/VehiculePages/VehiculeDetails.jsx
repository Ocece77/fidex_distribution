import { useParams } from "react-router-dom";
import VehiculeDetailsSection from "../../components/VehiculeDetailsSection";
import VehiculesHeader from "../../components/vehiculesHeader";
import VehiculesSection from "../../components/vehiculesSection";
import Map from "../../components/Map";
import ContactSection from "../../components/ContactSection";

function VehiculeDetails() {
  const { id } = useParams();

  return (
    <section>
      <VehiculesHeader/>
      <VehiculeDetailsSection id={id}/>
      <div className="grid gap-10">
             <Map/>
     <ContactSection/>
      </div>
 
    </section>
  );
}

export default VehiculeDetails;
