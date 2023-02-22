import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; // if we get an "id" in "editedExpenseId" variable that means are editing an expense & if we get "undefined" that means we failed to retrieve the "id" which means we are adding a new expense.

  const isEditing = !!editedExpenseId; // using "!!" in front of a variable we can convert a value into a boolean value, which is true if "id" exists and false if "id" doesn't exists.

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}

  function CancelHandler() {}

  function ConfirmHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPressProp={CancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPressProp={CancelHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPressProp={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
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

  deleteContainer: {
    margin: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
