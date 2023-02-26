import { createContext, useState } from "react";

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
  }

  function logout() {
    setAuthToken(null);
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
