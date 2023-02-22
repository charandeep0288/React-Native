import { View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod }) { // "expenses" is an object 
  return (
    <View>
      {/* SUMMARY */}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>

      {/* LIST OF EXPENSES */}
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;