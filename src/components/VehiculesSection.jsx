import React, { useState } from 'react';
import vehiculesData, { vehiculeTypeIcons } from '../dataTest/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VehiculesSection = ({cat="all"}) => {
  const [filterType, setFilterType] = useState(cat);
  const [selectedVehicule, setSelectedVehicule] = useState(null);

  const filteredVehicules = filterType === 'all'
    ? vehiculesData
    : vehiculesData.filter(v => v.type === filterType);

  const handleFilter = (type) => {
    setFilterType(type);
    setSelectedVehicule(null);
  };


  return (
    <div className="p-4 space-y-8">
      {/* Filtres */}
      <div className="flex flex-wrap gap-4 justify-center bg-white p-4 rounded shadow">
        <FilterButton
          label="Tous"
          active={filterType === 'all'}
          onClick={() => handleFilter('all')}
          icon={faCar}
        />
        <FilterButton
          label="SUV"
          active={filterType === 'suv'}
          onClick={() => handleFilter('suv')}
          icon={vehiculeTypeIcons.suv}
        />
        <FilterButton
          label="4x4"
          active={filterType === '4x4'}
          onClick={() => handleFilter('4x4')}
          icon={vehiculeTypeIcons['4x4']}
        />
        <FilterButton
          label="Pickup"
          active={filterType === 'pickup'}
          onClick={() => handleFilter('pickup')}
          icon={vehiculeTypeIcons.pickup}
        />
      <FilterButton
          label="Mini Bus"
          active={filterType === 'minibus'}
          onClick={() => handleFilter('minibus')}
          icon={vehiculeTypeIcons.minibus}
        />
         <FilterButton
          label="Van"
          active={filterType === 'van'}
          onClick={() => handleFilter('van')}
          icon={vehiculeTypeIcons.van}
        />
      </div>

      {/* Liste des véhicules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicules.map((vehicule) => (
          <div key={vehicule.id} className="bg-white p-4 rounded shadow">
            <img src={vehicule.image} alt={vehicule.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{vehicule.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{vehicule.engine}</p>
            <Link
              to={{
                pathname:`/vehicules/model/${vehicule.id}`,
                state: { vehicule: vehicule } 

              }}
              className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Voir les détails
            </Link>

          </div>
        ))}
      </div>

      {/* Détails du véhicule sélectionné */}
      {selectedVehicule && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Détails de {selectedVehicule.name}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <img src={selectedVehicule.image} alt={selectedVehicule.name} className="w-full h-auto rounded" />
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Prix:</strong> {selectedVehicule.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
              <p><strong>Moteur:</strong> {selectedVehicule.engine}</p>
              <p><strong>Puissance:</strong> {selectedVehicule.power}</p>
              <p><strong>Carburant:</strong> {selectedVehicule.fuel}</p>
              <p><strong>Transmission:</strong> {selectedVehicule.transmission}</p>
              <p><strong>Traction:</strong> {selectedVehicule.traction}</p>
              <p><strong>Portes:</strong> {selectedVehicule.doors}</p>
              <p><strong>Places:</strong> {selectedVehicule.seats}</p>
              <p><strong>Année:</strong> {selectedVehicule.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Petit composant pour les boutons filtres
const FilterButton = ({ label, icon, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full border  ${
      active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`}
  >
    <FontAwesomeIcon icon={icon} />
    {label}
  </button>
);

VehiculesSection.propTypes = {
    vehiculeType : PropTypes.string
}

export default VehiculesSection;
