import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './budgetForm.module.css';

export default class BudgetForm extends Component {
  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));

    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label
          htmlFor="budgetInput"
          className={styles.label}
          style={{ marginBottom: '16px' }}
        >
          Enter your total budget
          <input
            id="budgetInput"
            type="number"
            className={styles.input}
            value={budget}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Save
        </button>
      </form>
    );
  }
}

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
