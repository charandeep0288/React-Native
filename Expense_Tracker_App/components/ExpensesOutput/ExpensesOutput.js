import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/style";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod }) {
  // "expenses" is an object
  return (
    <View style={styles.container}>
      {/* SUMMARY */}
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />

      {/* LIST OF EXPENSES */}
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
