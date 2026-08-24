import React, { useState } from 'react';

const CONTINENT_DISTANCES = {
  kinshasa: 0,
  afrique: 1000,
  europe: 6000,
  amerique: 10000,
  asie: 12000,
  oceanie: 15000,
};

const EstimateShipping = () => {
  const [weight, setWeight] = useState('');
  const [continent, setContinent] = useState('kinshasa');
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
      setSummaryData({error: '❌ Veuillez remplir tous les champs correctement.'});
      return;
    }

    const distance = CONTINENT_DISTANCES[continent] || 1;

    const priceWeight = (weightInGrams / 100) * 1.5;
    const priceVolume = (volume * 0.05) /1000;
    const priceDistance = distance * 0.05;
    const total = priceWeight + priceVolume + priceDistance;

    setSummaryData(
      {     continent,
            distance,
            weightInGrams,
            priceWeight,
            volume,
            priceVolume,
            priceDistance,
            total,
      }
    );


  };

  return (
    <section className="py-20 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">Estimez votre colis</h1>
        <p className="text-neutral-600 mt-2">Remplissez les détails pour obtenir une estimation du prix d'envoi</p>
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
          placeholder="Poids (g)"
          required
        />

        <select
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
          className="w-full p-3 border-1 border-neutral-200 rounded-lg"
          required
        >
          <option value="kinshasa">Kinshasa</option>
          <option value="afrique">Afrique</option>
          <option value="europe">Europe</option>
          <option value="amerique">Amérique</option>
          <option value="asie">Asie</option>
          <option value="oceanie">Océanie</option>
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
          Estimer le prix
        </button>
      </form>

      {summaryData && (
        <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded-lg text-green-800 space-y-2 text-center">
          {summaryData.error ? (
            <p className="text-red-600 font-semibold">{summaryData.error}</p>
          ) : (
            <div className='flex flex-col gap-4'>
              <p className="font-semibold text-2xl md:text-4xl"> Estimation du colis</p>
                <div className='flex flex-col'>
                  <p> Continent : <span className="font-medium">{summaryData.continent}</span></p>
                  <p> Distance estimée : <span className="font-medium">{summaryData.distance} km</span></p>
                  <p> Poids : <span className="font-medium">{summaryData.weightInGrams}g</span> [{summaryData.priceWeight.toFixed(2)}$ / g]</p>
                  <p> Volume : <span className="font-medium">{summaryData.volume} cm³</span> ( {summaryData.priceVolume.toFixed(2)} $)</p>
                  <p> Coût distance :  {summaryData.priceDistance.toFixed(2)} $</p>
                </div>
              <p className="text-2xl md:text-4xl font-bold">Prix total estimé : {summaryData.total.toFixed(2)} $</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default EstimateShipping;
