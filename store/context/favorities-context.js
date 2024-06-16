import { createContext, useState } from "react";

export const FavoritiesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritiesContextProvider({ children }) {
  const [favoritieMealIds, setFavoritieMealIds] = useState([]);

  function addFavorite(id) {
    setFavoritieMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoritieMealIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => mealId !== id);
    });
  }

  const value = {
    ids: favoritieMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritiesContext.Provider value={value}>
      {children}
    </FavoritiesContext.Provider>
  );
}
export default FavoritiesContextProvider;
