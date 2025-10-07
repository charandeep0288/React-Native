import { createContext, useState } from "react";

export const FavoritiesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
}); // we made "F" upper case of this "FavoritiesContext" variable because we are going to use it as a component later on.

function FavoritiesContextProvider({ children }) {
  // all the logic would go here

  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    console.log(favoriteMealIds);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return <FavoritiesContext.Provider value={value}>{children}</FavoritiesContext.Provider>;
}

export default FavoritiesContextProvider;
