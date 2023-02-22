import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; // if we get an "id" in "editedExpenseId" variable that means are editing an expense & if we get "undefined" that means we failed to retrieve the "id" which means we are adding a new expense.

  const isEditing = !!editedExpenseId; // using "!!" in front of a variable we can convert a value into a boolean value, which is true if "id" exists and false if "id" doesn't exists.

  console.log(route.pramas);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpense Screen</Text>;
}

export default ManageExpense;
