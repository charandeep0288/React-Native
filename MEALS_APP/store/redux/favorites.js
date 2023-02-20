import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    // "reducers" are fns that are used to change ower state, all the funs in reducer get the latest state as a input
    addFavorite: (state, action) => {
      // we use "action" if we want sent some data to this function
      // we can "mutate state" with 'redux toolkit', but it was not allowed in the normal "redux"
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      // using splice(index_of_item_that_we_want_to_remove, number_of_items_that_we_want_to_remove) we can remove an element from an array
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;
