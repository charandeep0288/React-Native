import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { GlobalStyles } from "../constants/style";
import { ExpensesContext } from "../store/expneses-context";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";

function ManageExpense({ route, navigation }) {
  const [isSubumitting, setIsSubumitting] = useState(false); // initally we are "not submitting data", instead we are "gathering data" from user
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId; // if we get an "id" in "editedExpenseId" variable that means are editing an expense & if we get "undefined" that means we failed to retrieve the "id" which means we are adding a new expense.

  const isEditing = !!editedExpenseId; // using "!!" in front of a variable we can convert a value into a boolean value, which is true if "id" exists and false if "id" doesn't exists.

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubumitting(true);
    await deleteExpense(editedExpenseId);
    // setIsSubumitting(false); // we don't need to do this because we are closing this screen after submutting delete request
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack(); // we back to the Screen which opened this Screen, which means we close this Screen
  }

  async function confirmHandler(expenseData) {
    setIsSubumitting(true);
    // "expenseData" is an object which contains { amount, date, description }
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
      // added await for the sake we update data in the backend and then close the modal
      await updateExpense(editedExpenseId, expenseData); // we are updating data locally first then sending data to the backend, doing some optimizations
    } else {
      // console.log(expenseData);
      // we can't do this here when we create a new expense because we are relied on the id that we get from the backend firebase, then update values with firebase id, to render content on the UI.
      const id = await storeExpense(expenseData); // sending request to the backend, to store this data
      expenseCtx.addExpense({ ...expenseData, id: id });
    }
    // setIsSubumitting(false); // we can but, we don't need to do this because we are closing this screen after submutting delete request
    navigation.goBack();
  }

  if(isSubumitting) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />

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

  deleteContainer: {
    margin: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
