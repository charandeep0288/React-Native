import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expneses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);
  const [error, setError] = useState(); // Intial Value is "undefined" because initially we don't have any error, we can set this to some error message

  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  // PROBLEM -> when we add a new expense on "ManagerExpense Screen", then we can't see the newly added value is not being rendering on the UI "RecentExpenses Screen", and when we force a reload then we get that value on the screen, this is happening because "ManagerExpense Screen" is opening on the "RecentExpenses Screen" when we are adding new Expenses, hence "RecentExpenses Screen" is runing the background when we are adding an Expense, and when we are done with adding expense, we get back to the "RecentExpenses Screen" which was already running in the background, so "RecentExpenses Screen" doesn't re-render, and this "useEffect" doesn't work which is responsible to get the data from the backend and useEffect doesn't work, so this component doesn't re-render, hence we don't see the Expense we have added.
  // SOLUTION -> keep using Context, to update the data on the UI, in addition to the sending data to the backend

  // HTTTP Request is an asyncronous task
  useEffect(() => {
    // we can't convert useEffect's fn in argument into async await, so we have to do a work around by creating another function in useEffect fn and calling it in this useEffect
    async function getExpense() {
      setIsFetching(true); // we are showing LoadingOverlay before fetching the data

      try { // we have async await on this fn that's why we can use this try catch block here
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses); // we need to have this inside try block because when we fetched the data successfully, then we want to set the expenses in the context.
      } catch (error) {
        setError("Could not fetch expense!");
      }

      // we are doing "setIsFetching" outside try catch block because we want to update value of this "isFetching" either we have an error or not.
      setIsFetching(false); // and now after we are done with fetching the data we set its state to false
    }

    getExpense();
  }, []);

  async function errorHandler() {
    setError(null); // to clear the error, and that will remove the <ErrorOverlay>
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
