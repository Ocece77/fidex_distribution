import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='grid grid-cols-1 gap-10 py-30 bg-white'>
      {/* Titre */}
      <div className="flex flex-col gap-4 w-full justify-center items-center text-center md:px-10">
        <h1 className="lg:text-6xl text-4xl font-bold text-primary">
          {t('delivery.deliveryTracking.searchBar.title')}
        </h1>
        <p>{t('delivery.deliveryTracking.searchBar.subtitle')}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center w-screen mx-auto px-2 bg-white border-2 border-neutral-100 py-15 shadow-lg max-w-6xl"
      >
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-primary sr-only"
        >
          {t('delivery.deliveryTracking.searchBar.label')}
        </label>

        <div className="relative w-full md:w-4/6">
          <div className="absolute inset-y-0 start-2 flex items-center ps-2 pointer-events-none">
            <FontAwesomeIcon icon={faSearch} color="#002265" />
          </div>

          <input
            type="search"
            id="search"
            className="block w-full px-10 py-6 md:ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder={t('delivery.deliveryTracking.searchBar.placeholder')}
            required
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-red-800 transition-all px-2 md:px-6 py-3 md:py-3 rounded-lg"
          >
            {t('delivery.deliveryTracking.searchBar.button')}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
