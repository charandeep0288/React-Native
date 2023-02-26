import axios from "axios";

const API_KEY = "AIzaSyBQLDO2i3Fbnrih6W28f-JbFIH_yo5Zw28";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  //   console.log(response.data);
  const token = response.data.idToken; // we know the we would get token in "idToken" because we console data upthere and saw the results, or we can see on the official docs

  return token;
}

export function createUser(email, password) { // wraped this function into async await because we want to show a loading screen while this action is being performed in the backend
  return authenticate("signUp", email, password); // we can just do return and return the promise that we get & also then we can remove the async await from this fn to make things simpler.
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
