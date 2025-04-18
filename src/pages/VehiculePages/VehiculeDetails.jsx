import { useParams } from "react-router-dom";

function VehiculeDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails du véhicule {id}</h1>
      {/* Utiliser `id` ici pour fetch les infos via une API par exemple */}
    </div>
  );
}

export default VehiculeDetails;
