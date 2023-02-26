import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {}, // to check if a user SignedIn or LoggedIn successfully.
  logout: () => {}, // this would create the authentication status and token
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(); // Initial value of the auth token in undefined

  function authenticate(token) {
    setAuthToken(token);

    // we wanted that user must be logged in if user nagivate away from the app or closes the app, then that user must be logged in, so we are setting "token" in the AsyncStorage which is the part of react-native, and we are accessing that token the App.js in useEffect to have user logged in when user opens the app again, And we are doing thing in useEffect in App.js instead of doing here because we were getting a flikering effect(means for a second or so we first see the Login Screen then Welcome screen) when user comes back to the app.

    // store token on the device itself using AsyncStorage, with we are storing in the memory
    // AsyncStorage.setItem("key_name", value_which_must_be_string);
    AsyncStorage.setItem("token", token); // "token" is a string
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
