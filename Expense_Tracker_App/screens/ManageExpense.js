import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import { ExpensesContext } from "../store/expneses-context";

function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId; // if we get an "id" in "editedExpenseId" variable that means are editing an expense & if we get "undefined" that means we failed to retrieve the "id" which means we are adding a new expense.

  const isEditing = !!editedExpenseId; // using "!!" in front of a variable we can convert a value into a boolean value, which is true if "id" exists and false if "id" doesn't exists.

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function CancelHandler() {
    navigation.goBack(); // we back to the Screen which opened this Screen, which means we close this Screen
  }

  function ConfirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "Test!!!",
        amount: 22.22,
        date: new Date("2028-09-01"),
      });
    } else {
      expenseCtx.addExpense({
        description: "Test",
        amount: 11.11,
        date: new Date("2023-02-22"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPressProp={CancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPressProp={ConfirmHandler}>
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
