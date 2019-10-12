import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.SAVE_BUDGET:
      return payload.value;

    default:
      return state;
  }
};

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_EXPENSE:
      return [...state, payload.expense];

    case actionTypes.DELETE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
