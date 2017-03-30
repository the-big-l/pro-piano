import { CREATE_NOTE } from '../actions/beat_actions';
import merge from 'lodash/merge';

const _emptyRoll = [];

const rollReducer = (state = _emptyRoll, action) => {
  switch(action.type) {
    case CREATE_NOTE:
      return [...state, action.note];
    default:
      return state;
  }
};

export default rollReducer;
