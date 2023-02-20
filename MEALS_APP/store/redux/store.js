import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {} // reducer are different slices of state or data & actions that can change that data, that are then used by redux to then construct overall store of data and actions.
})