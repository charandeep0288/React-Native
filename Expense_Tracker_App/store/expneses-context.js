import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoes",
    amount: 59.99,
    date: new Date("2023-02-20"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 98.32,
    date: new Date("2023-01-03"),
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
    date: new Date("2023-02-21"),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  // Reducer fn for useReducer() hook
  switch (action.type) {
    case "ADD":
      const id = new Data.toString() + Math.random().toString(); // pseudo unique id
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      ); // this gives us the index of the item that should be updated 
      const updatableExpense = state[updateableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data} // we would keep the "id" & update/override the all other fields data
      const updatedExpenses = [...state]; // created new array to keep everything immutable
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
        return state.filter((expense) => expense.id !== action.payload)
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initialArgs, init);
  // reducer is the user-defined function that pairs the current state with the dispatch method to handle the state, initialArgs refers to the initial arguments and init is the function to initialize the state lazily.

  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES); // we use useReducer() when we have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.

  // expenseData => { description, amount, date }
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  // expenseData => { description, amount, date }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
