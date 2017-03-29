import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (state = {}) => (
  createStore(
    rootReducer,
    state
  )
);

export default configureStore;
