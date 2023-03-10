import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Input({ label, invalid, style, textInputConfig }) {
  // "textInputConfig" is an object that contains all the styles that we want to apply on the <TextInput>

  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMutltiLine);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      {/* Label for Input field */}
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },

  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },

  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary500,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },

  inputMutltiLine: {
    minHeight: 100,
    textAlignVertical: "top", // used this to have same behaviour in both platforms
  },

  invalidLabel: {
    color: GlobalStyles.colors.error500,
    fontWeight: "bold",
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
