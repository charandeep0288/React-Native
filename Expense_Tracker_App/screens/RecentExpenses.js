import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expneses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);

  // HTTTP Request is an asyncronous task
  useEffect(() => { // we can't convert useEffect's fn in argument into async await, so we have to do a work around by creating another function in useEffect fn and calling it in this useEffect 
    async function getExpense() {
      const expenses = await fetchExpenses();
    }

    getExpense();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today; // 31 > 25
  });

  // console.log(recentExpenses);

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
