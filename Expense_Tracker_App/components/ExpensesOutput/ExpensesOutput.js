import { View, StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../../constants/style";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>; // fall back text

  if (expenses.length > 0) {
    // {/* LIST OF EXPENSES */}
    content = <ExpensesList expenses={expenses} />;
  }

  // "expenses" is an object
  return (
    <View style={styles.container}>
      {/* SUMMARY */}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
