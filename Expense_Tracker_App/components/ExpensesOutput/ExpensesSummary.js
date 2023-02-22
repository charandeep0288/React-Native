import { View, Text } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  // .reduce() is a standard JS method that can be executed on Arrays and it allows us to combine multiple values an array into a single value, eg: Single Array
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount; 
  }, 0); // reduce((sum, expense) => { return returned_value_will_be_carried_over_to_the_sum_vairable }, intial_value_of_sum_variable) // "sum" is a carryover value which would be there.

  return (
    //   {/* SUMMARY */}
    <View>
      {/* PERIOD */}
      <Text>{periodName}</Text>
      {/* SUM IN DOLLORS */}
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
