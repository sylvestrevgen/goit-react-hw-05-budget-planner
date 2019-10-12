import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './expenseForm.module.css';

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { name, amount } = this.state;
    e.preventDefault();

    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    };

    this.props.onSave(expense);

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label
          htmlFor="expenseNameInput"
          className={styles.label}
          style={{ marginBottom: '16px' }}
        >
          Enter expense name
          <input
            id="expenseAmountInput"
            type="text"
            name="name"
            className={styles.input}
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="expenseNameInput"
          className={styles.label}
          style={{ marginBottom: '16px' }}
        >
          Enter expense amount
          <input
            id="expenseAmountInput"
            type="number"
            name="amount"
            className={styles.input}
            value={amount}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
