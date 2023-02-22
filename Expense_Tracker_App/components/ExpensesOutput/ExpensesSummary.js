import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function ExpensesSummary({ expenses, periodName }) {
  // .reduce() is a standard JS method that can be executed on Arrays and it allows us to combine multiple values an array into a single value, eg: Single Array
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // reduce((sum, expense) => { return returned_value_will_be_carried_over_to_the_sum_vairable }, intial_value_of_sum_variable) // "sum" is a carryover value which would be there.

  return (
    //   {/* SUMMARY */}
    <View style={styles.container}>
      {/* PERIOD */}
      <Text style={styles.period}>{periodName}</Text>
      {/* SUM IN DOLLORS */}
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },

  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
