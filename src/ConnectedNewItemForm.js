import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewItemForm } from './NewItemForm';
import { addNewItem } from './actions';

const mapDispatchToProps = {
  onSubmit: addNewItem
};

export const ConnectedNewItemForm = connect(
  null,
  mapDispatchToProps
)(NewItemForm);