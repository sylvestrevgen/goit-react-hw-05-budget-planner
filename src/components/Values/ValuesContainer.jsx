import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import Values from './Values';

const mapStateToProps = state => ({
  budget: selectors.getBudget(state),
  expenses: selectors.getExpensesValue(state),
  balance: selectors.getBalance(state),
});

export default connect(mapStateToProps)(Values);
