import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CONTINENT_DISTANCES = {
  kinshasa: 0,
  afrique: 1000,
  europe: 6000,
  amerique: 10000,
  asie: 12000,
  oceanie: 15000,
};

const EstimateShipping = () => {
  const { t } = useTranslation();

  const [weight, setWeight] = useState('');
  const [continent, setContinent] = useState(`Kinshasa (${t('delivery.deliveryEstimation.estimateShipping.africa')})`);
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
  const [summaryData, setSummaryData] = useState(null);

  const calculatePrice = (e) => {
    e.preventDefault();

    const weightInGrams = parseFloat(weight);
    const l = parseFloat(dimensions.length);
    const w = parseFloat(dimensions.width);
    const h = parseFloat(dimensions.height);
    const volume = (l * w * h);

    if (!weightInGrams || !l || !w || !h) {
      setSummaryData({ error: t('delivery.deliveryEstimation.estimateShipping.fillAllFieldsError') });
      return;
    }

    const distance = CONTINENT_DISTANCES[continent] || 1;

    const priceWeight = (weightInGrams / 100) * 1.5;
    const priceVolume = (volume * 0.05) / 1000;
    const priceDistance = distance * 0.05;
    const total = priceWeight + priceVolume + priceDistance;

    setSummaryData({
      continent,
      distance,
      weightInGrams,
      priceWeight,
      volume,
      priceVolume,
      priceDistance,
      total,
    });
  };

  return (
    <section className="py-20 max-w-4xl mx-auto">
      <div className="text-center mb-8 px-5">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          {t('delivery.deliveryEstimation.estimateShipping.title')}
        </h1>
        <p className="text-neutral-600 mt-2">
          {t('delivery.deliveryEstimation.estimateShipping.subtitle')}
        </p>
      </div>

      <form
        onSubmit={calculatePrice}
        className="bg-white shadow-md p-6 rounded-xl space-y-6 "
      >
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 border-1 border-neutral-200 rounded-lg"
          placeholder={t('delivery.deliveryEstimation.estimateShipping.weightPlaceholder')}
          required
        />

        <select
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
          className="w-full p-3 border-1 border-neutral-200 rounded-lg"
          required
        >
          <option value="kinshasa">Kinshasa</option>
          <option value="afrique">{t('delivery.deliveryEstimation.estimateShipping.africa')}</option>
          <option value="europe">{t('delivery.deliveryEstimation.estimateShipping.europe')}</option>
          <option value="amerique">{t('delivery.deliveryEstimation.estimateShipping.america')}</option>
          <option value="asie">{t('delivery.deliveryEstimation.estimateShipping.asia')}</option>
          <option value="oceanie">{t('delivery.deliveryEstimation.estimateShipping.oceania')}</option>
        </select>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['length', 'width', 'height'].map((dim) => (
            <input
              key={dim}
              type="number"
              value={dimensions[dim]}
              onChange={(e) =>
                setDimensions({ ...dimensions, [dim]: e.target.value })
              }
              className="w-full p-3 border-1 border-neutral-200 rounded-lg "
              placeholder={`${dim} (cm)`}
              required
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-red-800 transition-all"
        >
          {t('delivery.deliveryEstimation.estimateShipping.estimateButton')}
        </button>
      </form>

      {summaryData && (
        <div className="mt-6 p-4 bg-blue-50 border border-primary rounded-lg text-dark-primary space-y-2 text-center">
          {summaryData.error ? (
            <p className="text-red-600 font-semibold">{summaryData.error}</p>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-2xl md:text-4xl">
                {t('delivery.deliveryEstimation.estimateShipping.summaryTitle')}
              </p>
              <div className="flex flex-col">
                <p>
                  {t('delivery.deliveryEstimation.estimateShipping.continent')} :{' '}
                  <span className="font-medium">{summaryData.continent}</span>
                </p>
                <p>
                  {t('delivery.deliveryEstimation.estimateShipping.distance')} :{' '}
                  <span className="font-medium">{summaryData.distance} km</span>
                </p>
                <p>
                  {t('delivery.deliveryEstimation.estimateShipping.weight')} :{' '}
                  <span className="font-medium">
                    {summaryData.weightInGrams}g
                  </span>{' '}
                  [{summaryData.priceWeight.toFixed(2)}$ / g]
                </p>
                <p>
                  {t('delivery.deliveryEstimation.estimateShipping.volume')} :{' '}
                  <span className="font-medium">{summaryData.volume} cm³</span>{' '}
                  ({summaryData.priceVolume.toFixed(2)} $)
                </p>
                <p>
                  {t('delivery.deliveryEstimation.estimateShipping.distanceCost')} :{' '}
                  {summaryData.priceDistance.toFixed(2)} $
                </p>
              </div>
              <p className="text-2xl md:text-4xl font-bold">
                {t('delivery.deliveryEstimation.estimateShipping.total')} : {summaryData.total.toFixed(2)} $
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default EstimateShipping;
