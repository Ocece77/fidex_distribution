import PropTypes from 'prop-types';
import React from 'react';
import vehiculeData from '../dataTest/data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const VehiculeDetailsSection = ({ id }) =>{
  const vehicle = vehiculeData.find((vehicule) => vehicule.id === parseInt(id));

  if (!vehicle) {
    return <div className="p-6">Aucun détail de véhicule trouvé.</div>;
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-10 ">
      <div className="grid gap-20 max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Vehicle Image */}
            <div className="w-full">
            <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full object-contain"
            />
            </div>

            {/* Vehicle Info Card */}
            <div className=" border-neutral-50 rounded-md shadow-sm py-10 px-6 flex flex-col justify-between">
            {/* Header */}
            <div className='grid gap-2'>
                <h1 className="text-4xl font-bold text-primary">{vehicle.name.toUpperCase()}</h1>
                <p className="text-gray-700 mb-2">Véhicule neuf - {vehicle.fuel} - {vehicle.transmission}</p>
                <p className="text-sm text-red-800 font-semibold mb-2">REF : {`100${vehicle.id}`}</p>

                {/* Availability & Icons */}
                <div className="flex items-center space-x-4 mb-4">
                    <Link to="/contacts" className="flex items-center text-sm font-semibold hover:underline">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-dark-primary" />
                        DISPONIBLE EN AGENCE
                    </Link>
                </div>

                <div className="flex items-center space-x-6 mb-4 text-gray-800">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faGasPump} />
                    <span>{vehicle.fuel}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCogs} />
                    <span>{vehicle.transmission}</span>
                </div>
                </div>

                {/* Price */}
                <div className="bg-gray-100 px-4 py-6 rounded-md text-center mb-4">
                <p className="text-sm text-gray-500">
                    prix T1 <span className="text-xs">(Hors TVA, Hors taxe pour Export)</span>
                </p>
                <p className="text-4xl font-bold text-blue-900">
                    {vehicle.price.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    })}
                </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-6">
                Contactez-nous pour obtenir des informations, des conseils ou un devis personnalisé pour le <strong>{vehicle.name}</strong>
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link to="/contacts" className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800">
                Contactez nous
                </Link>
                <a href="#caracteristiques" className="border border-blue-900 text-blue-900 px-6 py-3 rounded font-semibold hover:bg-blue-50">
                Voir les caractéristiques
                </a>
            </div>
            </div>
        </div>

        {/* Description */}
        <div id="caracteristiques" className="mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 ">
            Caractéristiques du {vehicle.name}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Découvrez le <span className='font-bold text-primary'>{vehicle.name} </span>: robuste, fiable et élégant. Conçu pour les amateurs
            d'aventure, ce {vehicle.traction} combine puissance et confort pour vous accompagner partout.
          </p>
        </div>

        {/* Main Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4 border-b-1 border-neutral-200 pb-3">
              Les points clés du {vehicle.name}
            </h3>
            <div className="grid gap-5 list-inside text-gray-700 mb-6 space-y-1 ">
              <div  className='flex justify-between pe-10'><strong>Moteur :</strong>  {vehicle.engine}</div>
              <div  className='flex justify-between pe-10'><strong>Puissance :</strong>  {vehicle.power}</div>
              <div  className='flex justify-between pe-10'><strong>Nombre de places :</strong>  {vehicle.seats}</div>
              <div  className='flex justify-between pe-10'><strong>Transmission :</strong>  {vehicle.transmission}</div>
              <div  className='flex justify-between pe-10'><strong>Traction :</strong>  {vehicle.traction}</div>
              <div  className='flex justify-between pe-10'><strong>État :</strong> {vehicle.condition || 'Neuf'}</div>
              <div  className='flex justify-between pe-10'><strong>Conduite :</strong> {vehicle.drive || 'RHD (volant à droite)'}</div>
              <div  className='flex justify-between pe-10'><strong>Marque :</strong> {vehicle.brand}</div>
              <div  className='flex justify-between pe-10'><strong>Modèle :</strong> {vehicle.name}</div>
              <div  className='flex justify-between pe-10'><strong>Version :</strong> {vehicle.version}</div>
              <div  className='flex justify-between pe-10'><strong>Année :</strong> {vehicle.year || 'N/A'}</div>
              <div  className='flex justify-between pe-10'><strong>Places :</strong> {vehicle.seats}</div>
              <div  className='flex justify-between pe-10'><strong>Portes :</strong> {vehicle.doors}</div>
              <div  className='flex justify-between pe-10'><strong>Transmission :</strong> {vehicle.transmission}</div>
              <div  className='flex justify-between pe-10'><strong>Traction :</strong> {vehicle.traction}</div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4 border-b-1 border-neutral-200 pb-3">Moteur</h3>
            <div className="grid gap-5 text-gray-700 text-sm mb-6">
              <div  className='flex justify-between pe-10'><strong>Puissance :</strong> {vehicle.power}</div>
              <div  className='flex justify-between pe-10'><strong>Carburant :</strong> {vehicle.fuel}</div>
              <div  className='flex justify-between pe-10'><strong>Cylindres :</strong> {vehicle.cylinders}</div>
              <div  className='flex justify-between pe-10'><strong>Cylindrée :</strong> {vehicle.displacement}</div>
            </div>

            <h3 className="text-lg font-semibold text-red-800 mb-4 border-b-1 border-neutral-200 pb-3">Châssis & suspensions</h3>
            <div className="grid gap-5 text-gray-700 text-sm">
              <div  className='flex justify-between pe-10'><strong>Boîte de vitesses :</strong> {vehicle.transmission}</div>
              <div  className='flex justify-between pe-10'><strong>Traction :</strong> {vehicle.traction}</div>
              <div  className='flex justify-between pe-10'><strong>Empattement :</strong> {vehicle.wheelbase || '3.0 m'}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

VehiculeDetailsSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default VehiculeDetailsSection;
