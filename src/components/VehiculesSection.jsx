import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import vehiculesData, { vehiculeTypeIcons } from '../dataTest/data';

const VehiculesSection = ({ cat = "all", brand = "all" }) => {
  const { t } = useTranslation();
  const [filterType, setFilterType] = useState(cat);
  // eslint-disable-next-line no-unused-vars
  const [filterBrand, setFilterBrand] = useState(brand);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const filteredVehicules = vehiculesData.filter((v) => {
    const typeMatch = filterType === 'all' || v.type === filterType;
    const brandMatch = filterBrand === 'all' || v.brand === filterBrand;
    return typeMatch && brandMatch;
  });

  return (
    <div className="p-4 space-y-8 h-fit max-w-7xl mx-auto">
      {/* Afficher la marque filtrée */}
      {filterBrand !== "all" && (
        <div className='w-full flex items-center justify-center text-center text-3xl text-primary'>
          <h2>
            {t('vehicules.vehiculesSection.title')} <span className='capitalize font-bold'>{filterBrand}</span>
          </h2>
        </div>
      )}
      {/* Filtres */}
      <div className="flex flex-wrap gap-4 justify-center bg-white p-4 rounded shadow">
        <FilterButton
          label={t('vehicules.vehiculesSection.filters.all')}
          active={filterType === 'all'}
          onClick={() => handleFilter('all')}
          icon={faCar}
        />
        <FilterButton
          label={t('vehicules.vehiculesSection.filters.suv')}
          active={filterType === 'suv'}
          onClick={() => handleFilter('suv')}
          icon={vehiculeTypeIcons.suv}
        />
        <FilterButton
          label={t('vehicules.vehiculesSection.filters.4x4')}
          active={filterType === '4x4'}
          onClick={() => handleFilter('4x4')}
          icon={vehiculeTypeIcons['4x4']}
        />
        <FilterButton
          label={t('vehicules.vehiculesSection.filters.pickup')}
          active={filterType === 'pickup'}
          onClick={() => handleFilter('pickup')}
          icon={vehiculeTypeIcons.pickup}
        />
        <FilterButton
          label={t('vehicules.vehiculesSection.filters.minibus')}
          active={filterType === 'minibus'}
          onClick={() => handleFilter('minibus')}
          icon={vehiculeTypeIcons.minibus}
        />
      </div>

      {/* Liste des véhicules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicules && filteredVehicules.map((vehicule) => (
          <div key={vehicule.id} className="bg-white p-4 rounded shadow">
            <img src={vehicule.image} alt={vehicule.name} className="w-150 h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{vehicule.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{vehicule.engine}</p>
            <Link
              to={{
                pathname: `/vehicules/model/${vehicule.id}`,
                state: { vehicule: vehicule }
              }}
              className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-red-800"
            >
              {t('vehicules.vehiculesSection.buttonText')}
            </Link>
          </div>
        ))}
        {!filteredVehicules && (<div>Aucun véhicules correspondant aux critères de recherches</div>)}
      </div>
    </div>
  );
};

// Composant pour les boutons de filtre
const FilterButton = ({ label, icon, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
      active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`}
  >
    <FontAwesomeIcon icon={icon} />
    {label}
  </button>
);

VehiculesSection.propTypes = {
  cat: PropTypes.string,
  brand: PropTypes.string,
};

export default VehiculesSection;
