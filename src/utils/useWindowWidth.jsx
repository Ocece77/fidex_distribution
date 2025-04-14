import { useEffect, useState } from "react";

/**
 * Hook personnalisé pour obtenir la largeur de la fenêtre.
 * @returns {number} La largeur actuelle de la fenêtre.
 */
export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    
    // Nettoyage de l'event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
