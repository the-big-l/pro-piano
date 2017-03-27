import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (state = preloadedState) => (
  createStore(
    rootReducer,
    state
  )
);
