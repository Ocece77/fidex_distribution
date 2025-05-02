const initialState = {
    language: localStorage.getItem('language') || 'fr', // Charge la langue à partir du localStorage ou 'fr' par défaut
  };
  
  // Réducteur pour gérer le changement de langue
  const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LANGUAGE':
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;
  