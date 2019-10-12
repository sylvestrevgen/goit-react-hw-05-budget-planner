import React from 'react';
import PropTypes from 'prop-types';
import styles from './app.module.css';
import BudgetForm from '../BudgetForm/BudgetFormContainer';
import Values from '../Values/ValuesContainer';
import ExpenseForm from '../ExpenseForm/ExpenseFormContainer';
import ExpensesTable from '../ExpensesTable/ExpensesTableContainer';

const App = ({ expenses }) => (
  <div className={styles.app}>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTable />}
  </div>
);

App.defaultProps = {
  expenses: [],
};

App.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default App;
