import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importation du hook i18next

const information = {
  "email": ["fidexdistribution@gmail.com", faEnvelope],
  "adresse": ["Urban Committee 5-C, Kinshasa-Gombe, RDC", faLocationDot],
  "téléphone": ["+233 1 23 45 67", faPhone],
};

const Map = ({ titre, desc }) => {
  const { t } = useTranslation(); // Utilisation du hook i18next

  return (
    <section id="contact" className="flex justify-center p-2.5">
      <div className="max-w-9xl md:p-10">
        {/* Titre de la section - haut */}
        <div className="flex flex-col gap-5 text-center md:px-10">
          <h1 className="lg:text-6xl text-4xl font-bold text-primary">{titre || t("map.title")}</h1>
          <p className="text-sm font-light">{desc || t("map.description")}</p>
        </div>

        {/* Container d'information - bas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 px-2.5 h-full">
          {/* Information */}
          <div className="flex flex-col gap-5.5">
            {Object.entries(information).map(([key, val], i) => {
              return (
                <div key={i} className='h-fit'>
                  <div className='flex gap-3 py-4 px-1'>
                    {/* Logo */}
                    <div className='flex justify-center items-center'>
                      <FontAwesomeIcon color="#002265" icon={val[1]} size="2xl" />
                    </div>
                    {/* Titre + info */}
                    <div>
                      <p className=' font-bold capitalize'>{t(`map.information.${key}`)}</p>
                      <p className='underline text-sm'>{val[0]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map + Contact Info */}
          <div className="w-full xl:h-[35em] h-[27em] bg-blue-100 rounded-lg items-end justify-start">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://maps.google.com/maps?q=Urban%20Committee%205-C,%20Kinshasa-Gombe,%20RDC&output=embed"
              style={{ filter: "grayscale(0) contrast(1.2) opacity(0.6)" }}
            ></iframe>
            <div className='flex flex-col w-full text-end pt-3'>
              <p>{t("map.openingHours.open")}</p>
              <p>{t("map.openingHours.closed")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Map.propTypes = {
  titre: PropTypes.string,
  desc: PropTypes.string
};

export default Map;
