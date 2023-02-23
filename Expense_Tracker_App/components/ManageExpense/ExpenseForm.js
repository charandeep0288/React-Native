import { TextInput, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, // default is true, eg:- we don't want this "autoCorrect" when we are writting an email, , that would create lots of problems.
          // autoCapitalize: "characters", // "sentences" by default are Capitalized, other options -> "characters", "words", "none"......... eg:- we don't want this "autoCapitalize" when we are writting an email, that would create lots of problems.
        }}
      />
    </View>
  );
}

export default ExpenseForm;
