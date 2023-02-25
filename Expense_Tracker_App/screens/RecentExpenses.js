import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expneses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  // PROBLEM -> when we add a new expense on "ManagerExpense Screen", then we can't see the newly added value is not being rendering on the UI "RecentExpenses Screen", and when we force a reload then we get that value on the screen, this is happening because "ManagerExpense Screen" is opening on the "RecentExpenses Screen" when we are adding new Expenses, hence "RecentExpenses Screen" is runing the background when we are adding an Expense, and when we are done with adding expense, we get back to the "RecentExpenses Screen" which was already running in the background, so "RecentExpenses Screen" doesn't re-render, and this "useEffect" doesn't work which is responsible to get the data from the backend and useEffect doesn't work, so this component doesn't re-render, hence we don't see the Expense we have added.
  // SOLUTION -> keep using Context, to update the data on the UI, in addition to the sending data to the backend

  // HTTTP Request is an asyncronous task
  useEffect(() => { // we can't convert useEffect's fn in argument into async await, so we have to do a work around by creating another function in useEffect fn and calling it in this useEffect 
    async function getExpense() {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    }

    getExpense();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
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
