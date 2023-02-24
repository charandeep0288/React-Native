import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  // Reducer fn for useReducer() hook
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString(); // pseudo unique id
      return [{ ...action.payload, id: id }, ...state];
    case "SET":
      return action.payload;
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      ); // this gives us the index of the item that should be updated
      const updatableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.date }; // we would keep the "id" & update/override the all other fields data
      const updatedExpenses = [...state]; // created new array to keep everything immutable
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initialArgs, init);
  // reducer is the user-defined function that pairs the current state with the dispatch method to handle the state, initialArgs refers to the initial arguments and init is the function to initialize the state lazily.

  const [expensesState, dispatch] = useReducer(expensesReducer, []); // we use useReducer() when we have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.

  // expenseData => { description, amount, date }
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  // expenseData => { description, amount, date }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, date: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
