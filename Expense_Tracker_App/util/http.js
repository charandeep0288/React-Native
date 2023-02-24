import axios from "axios";

// expenseData -> { amount, date, description }, we don't want to sent id here 
export function storeExpense(expenseData) {
  // axios.post("URL_as_string_to_which_request_should_be_sent_first_arguement", value_which_we_want_to_send)
  axios.post(
    "https://console.firebase.google.com/u/0/project/expense-tracker-app-2c286/database/expense-tracker-app-2c286-default-rtdb/data/~2F/expenses.json", // firebase want this .json at the last that means we are targing node in the backend
    expenseData
  ); // to sending post request to send data
}
