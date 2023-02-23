import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/style";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  //   const [amountValue, setAmountValue] = useState(""); // we have intial value "" because what value we get from the TextInput is a string, ever if we have entered a number, so we have used this "Empty string(.)" here instead of a numaric value.

  const [inputs, setInputs] = useState({
    // helps us to reduce the redundant code
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "", // we have to convert this default "amount" value to the string because we converted it to number and then stored is as number there
      isValid: true, // !!defaultValues -> !! this would convert value into a boolean value
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true, // we were getting that error message we added "Invalid input values - please check your entered data!" when we render the component for the first time onPress of + btn, making -> isValid: true, will make sure that we don't that message when user tries to add a new Expense by Pressing on the "+" btn. And we are adding actual validity of this value(in this case "date") in submitHandler() fn where we are doing validations and overriding "isValid" to the actual validity after runing validity checks.
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  }); // instead of creating 3 useState() for individual case here, we can also create only one useState() to handle all the States

  function inputChangedHandler(inputIdentifier, enteredValue) {
    // react-native gives us the entered text, if we connect this fn to the "onChangeText" effect. And "inputIdentifier" we have to send this value to the fn when calling it because react-native doesn't know about this "inputIdentifier" value
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true }, // we assume that value we are getting is valid, and we would change this if the value is invalid during validations.
        // JS functionality to set and target a property dynamically
      };
    }); // if we update state based on previous state we use this function format
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value, // + converts string value into a number
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    // doing validations
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIdValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIdValid) {
      // show feedback
      // Alert.alert("Invalid input", "Please check your input values");

      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIdValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"), // "enteredValue" we don't need to sent this value because this will be provided by the react-native by default as a second parameter
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"), // "enteredValue" we don't need to sent this value because this will be provided by the react-native by default as a second parameter
            value: inputs.date.value,
          }}
        />
      </View>

      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, // default is true, eg:- we don't want this "autoCorrect" when we are writting an email, , that would create lots of problems.
          // autoCapitalize: "characters", // "sentences" by default are Capitalized, other options -> "characters", "words", "none"......... eg:- we don't want this "autoCapitalize" when we are writting an email, that would create lots of problems.
          onChangeText: inputChangedHandler.bind(this, "description"), // "enteredValue" we don't need to sent this value because this will be provided by the react-native by default as a second parameter
          value: inputs.description.value,
        }}
      />

      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}

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

  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
    fontWeight: "bold",
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
