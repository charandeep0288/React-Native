import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/style";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 98.32,
    date: new Date("2021-01-03"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.3542,
    date: new Date("2021-12-03"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.32,
    date: new Date("2021-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.32,
    date: new Date("2021-02-18"),
  },
  {
    id: "e6",
    description: "A pair of Shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 98.32,
    date: new Date("2021-01-03"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.3542,
    date: new Date("2021-12-03"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.32,
    date: new Date("2021-02-19"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 18.32,
    date: new Date("2021-02-18"),
  },
];

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
