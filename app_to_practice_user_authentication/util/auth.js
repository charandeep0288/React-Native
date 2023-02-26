import axios from "axios";

const API_KEY = "AIzaSyBQLDO2i3Fbnrih6W28f-JbFIH_yo5Zw28";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function createUser(email, password) {
  // wraped this function into async await because we want to show a loading screen while this action is being performed in the backend
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
    await authenticate("signInWithPassword", email, password);
}