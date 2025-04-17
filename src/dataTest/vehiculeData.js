import patrol from "../assets/photos/vehicules/nissan-patrol.png";
import fortuner from "../assets/photos/vehicules/toyota_fortuner.png";
import miniBus from "../assets/photos/vehicules/toyota-mini-bus-hiace.png";


const vehiculeData = [
  {
    id: "nissan-patrol-2020",
    motorisation: "Essence",
    nom: "Nissan PATROL 2020",
    lien: "/vehicule/nissan-patrol-2020",
    prix: "12 000$",
    image: patrol
  },
  {
    id: "toyota-fortuner",
    motorisation: "Diesel",
    nom: "Toyota FORTUNER",
    lien: "/vehicule/toyota-fortuner",
    prix: "14 500$",
    image: fortuner
  },
  {
    id: "toyota-hiace",
    motorisation: "Diesel",
    nom: "Mini bus Toyota HIACE",
    lien: "/vehicule/toyota-hiace",
    prix: "18 000$",
    image: miniBus
  },
];

export default vehiculeData;
