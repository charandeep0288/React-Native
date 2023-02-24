import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-app-2c286-default-rtdb.firebaseio.com/";
// expenseData -> { amount, date, description }, we don't want to sent id here because that is being generated by the firebase.
export function storeExpense(expenseData) {
  // axios.post("URL_as_string_to_which_request_should_be_sent_first_arguement", value_which_we_want_to_send)
  axios.post(
    BACKEND_URL + "/expenses.json", // firebase want this .json at the last that means we are targing node in the backend
    expenseData
  ); // to sending post request to send data
}

export async function fetchExpenses() {
  // we are using async await here
  const response = await axios.get(BACKEND_URL + "/expenses.json"); // .get() doesn't need extra argument

  // this next line would work, if we have "response" 
  const expenses = [];

  // console.log(response.data); // to see data
  for(const key in response.data ) { // axios gives us the "data" property on the response object which hold the actual data which was send back by the server  
    const expenseObj = {
        id: key,
        amount: response.data[key].amount, // dynamically access the value 
        date: new Date(response.data[key].date), // firebase store date as a string not in Date format
        description: response.data[key].description,
    }

    expenses.push(expenseObj)
  }
  
  return expenses; // we are transforming data that we get from firebase into Array of objects and then return it from here to display these values to the user that we are getting from the backend
}
