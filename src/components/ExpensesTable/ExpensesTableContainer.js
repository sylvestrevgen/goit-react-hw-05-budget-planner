import { connect } from 'react-redux';
import { deleteExpense } from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => ({
  items: selectors.getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
