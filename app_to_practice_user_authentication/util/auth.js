import axios from "axios";

const API_KEY = "AIzaSyBQLDO2i3Fbnrih6W28f-JbFIH_yo5Zw28";

async function createUser(email, passord) { // wraped this function into async await because we want to show a loading screen while this action is being performed in the backend
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
