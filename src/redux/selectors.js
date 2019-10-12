export const getBudget = state => state.budget;

export const getExpenses = state => state.expenses;

export const getExpensesValue = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const getBalance = state => {
  const budget = getBudget(state);
  const expensesValue = getExpensesValue(state);
  return budget - expensesValue;
};
