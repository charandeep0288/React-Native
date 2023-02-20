import { createContext } from "react";

export const FavoritiesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
}); // we made "F" upper case of this "FavoritiesContext" variable because we are going to use it as a component later on.

function FavoritiesContextProvider({ children }) {
  // all the logic would go here

  return <FavoritiesContext.Provider>{children}</FavoritiesContext.Provider>;
}

export default FavoritiesContextProvider;
