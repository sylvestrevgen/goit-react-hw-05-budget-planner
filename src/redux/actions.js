import actionTypes from './actionTypes';

export const saveBudget = value => ({
  type: actionTypes.SAVE_BUDGET,
  payload: {
    value,
  },
});

export const addExpense = expense => ({
  type: actionTypes.ADD_EXPENSE,
  payload: {
    expense,
  },
});

export const deleteExpense = id => ({
  type: actionTypes.DELETE_EXPENSE,
  payload: {
    id,
  },
});
