import PropTypes from 'prop-types';
import React from 'react';
import vehiculeData from '../dataTest/data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const VehiculeDetailsSection = ({ id }) =>{
  const { t } = useTranslation();
  const vehicle = vehiculeData.find((vehicule) => vehicule.id === parseInt(id));

  if (!vehicle) {
    return <div className="p-6">{t('vehicules.details.noVehicleDetailsFound')}</div>;
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-10 ">
      <div className="grid gap-20 max-w-6xl mx-auto">
        <div className=' flex gap-2.5 items-center hover:gap-3.5 text-dark-primary hover:text-red-800 transition-all'>
          <FontAwesomeIcon icon={faArrowLeft}/>
            <Link to="/vehicules/type/all">
            {t('vehicules.details.backToSelection')}</Link>
        </div>

        {/* Section d'en-tête */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Image du véhicule */}
            <div className="w-full flex items-center">
            <img
                src={vehicle.image}
                alt={vehicle.name}
                className="max-w-full object-contain "
            />
            </div>

            {/* Carte d'informations du véhicule */}
            <div className=" border-neutral-50 rounded-md shadow-sm py-10 px-6 flex flex-col justify-between">
            {/* En-tête */}
            <div className='grid gap-2'>
                <h1 className="text-4xl font-bold text-primary">{vehicle.name.toUpperCase()}</h1>
                <p className="text-gray-700 mb-2">{t('vehicules.details.newVehicle')} - {vehicle.fuel} - {vehicle.transmission}</p>
                <p className="text-sm text-red-800 font-semibold mb-2">{t('vehicules.details.ref')} : {`100${vehicle.id}`}</p>

                {/* Disponibilité et icônes */}
                <div className="flex items-center space-x-4 mb-4">
                    <Link to="/contacts" className="flex items-center text-sm font-semibold hover:underline">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-dark-primary" />
                        {t('vehicules.details.availableAtAgency')}
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

                {/* Prix */}
                <div className="bg-gray-100 px-4 py-6 rounded-md text-center mb-4">
                <p className="text-sm text-gray-500">
                    {t('vehicules.details.priceT1')} <span className="text-xs">{t('vehicules.details.excludingVAT')}</span>
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
                {t('vehicules.details.contactUsForInfo')} <strong>{vehicle.name}</strong>
                </p>
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link to="/contacts" className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800">
                {t('vehicules.details.contactUs')}
                </Link>
                <a href="#caracteristiques" className="border border-blue-900 text-blue-900 px-6 py-3 rounded font-semibold hover:bg-blue-50">
                {t('vehicules.details.seeFeatures')}
                </a>
            </div>
            </div>
        </div>

        {/* Description */}
        <div id="caracteristiques" className="mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 ">
            {t('vehicules.details.featuresOf')} {vehicle.name}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t('vehicules.details.discoverThe')} <span className='font-bold text-primary'>{vehicle.name} </span>{t('vehicules.details.robustReliableElegant')} {vehicle.traction} {t('vehicules.details.combinesPowerAndComfort')}.
          </p>
        </div>

        {/* Section d'informations principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonne de gauche */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4 border-b-1 border-neutral-200 pb-3">
              {t('vehicules.details.keyFeaturesOf')} {vehicle.name}
            </h3>
            <div className="grid gap-5 list-inside text-gray-700 mb-6 space-y-1 ">
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.engine')} :</strong>  {vehicle.engine}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.power')} :</strong>  {vehicle.power}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.numberOfSeats')} :</strong>  {vehicle.seats}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.transmission')} :</strong>  {vehicle.transmission}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.traction')} :</strong>  {vehicle.traction}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.condition')} :</strong> {vehicle.condition || t('vehicules.details.new')}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.driving')} :</strong> {vehicle.drive || t('vehicules.details.rhdRightHandDrive')}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.brand')} :</strong> {vehicle.brand}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.model')} :</strong> {vehicle.name}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.version')} :</strong> {vehicle.version}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.year')} :</strong> {vehicle.year || t('vehicules.details.na')}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.seats')} :</strong> {vehicle.seats}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.doors')} :</strong> {vehicle.doors}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.transmission')} :</strong> {vehicle.transmission}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.traction')} :</strong> {vehicle.traction}</div>
            </div>
          </div>

          {/* Colonne de droite */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4 border-b-1 border-neutral-200 pb-3">{t('vehicules.details.engine')}</h3>
            <div className="grid gap-5 text-gray-700 text-sm mb-6">
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.power')} :</strong> {vehicle.power}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.fuel')} :</strong> {vehicle.fuel}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.cylinders')} :</strong> {vehicle.cylinders}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.displacement')} :</strong> {vehicle.displacement}</div>
            </div>

            <h3 className="text-lg font-semibold text-red-800 mb-4 border-b-1 border-neutral-200 pb-3">{t('vehicules.details.chassisSuspension')}</h3>
            <div className="grid gap-5 text-gray-700 text-sm">
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.gearbox')} :</strong> {vehicle.transmission}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.traction')} :</strong> {vehicle.traction}</div>
              <div  className='flex justify-between pe-10'><strong>{t('vehicules.details.wheelbase')} :</strong> {vehicle.wheelbase || `3.0 ${t('vehicules.details.meters')}`}</div>
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