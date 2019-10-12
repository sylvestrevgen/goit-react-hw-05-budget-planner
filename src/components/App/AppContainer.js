import { connect } from 'react-redux';
import App from './App';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
  expenses: selectors.getExpenses(state),
});

export default connect(mapStateToProps)(App);
