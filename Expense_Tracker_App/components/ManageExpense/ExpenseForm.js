import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
  //   const [amountValue, setAmountValue] = useState(""); // we have intial value "" because what value we get from the TextInput is a string, ever if we have entered a number, so we have used this "Empty string(.)" here instead of a numaric value.

  const [inputValues, setInputValues] = useState({
    // helps us to reduce the redundant code
    amount: "",
    date: "",
    description: "",
  }); // instead of creating 3 useState() for individual case here, we can also create only one useState() to handle all the States

  function inputChangedHandler(inputIdentifier, enteredValue) {
    // react-native gives us the entered text, if we connect this fn to the "onChangeText" effect. And "inputIdentifier" we have to send this value to the fn when calling it because react-native doesn't know about this "inputIdentifier" value
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue, // JS functionality to set and target a property dynamically
      };
    }); // if we update state based on previous state we use this function format
  }

  function submitHandler() {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"), // "enteredValue" we don't need to sent this value because this will be provided by the react-native by default as a second parameter
            value: inputValues["amount"],
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"), // "enteredValue" we don't need to sent this value because this will be provided by the react-native by default as a second parameter
            value: inputValues["date"],
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, // default is true, eg:- we don't want this "autoCorrect" when we are writting an email, , that would create lots of problems.
          // autoCapitalize: "characters", // "sentences" by default are Capitalized, other options -> "characters", "words", "none"......... eg:- we don't want this "autoCapitalize" when we are writting an email, that would create lots of problems.
          onChangeText: inputChangedHandler.bind(this, "description"), // "enteredValue" we don't need to sent this value because this will be provided by the react-native by default as a second parameter
          value: inputValues["description"],
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPressProp={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPressProp={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },

  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rowInput: {
    flex: 1,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
