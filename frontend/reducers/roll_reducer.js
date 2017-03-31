import { CREATE_NOTE } from '../actions/beat_actions';
import keyData from '../util/piano_keys';
import merge from 'lodash/merge';

function createEmptyRoll() {
  const _emptyRoll = {spacer: []};
  keyData.forEach(key => {
    _emptyRoll[key.pitch] = [];
  })
  return _emptyRoll;
}

const rollReducer = (state = createEmptyRoll(), action) => {
  const newState = merge({}, state);
  switch(action.type) {
    case CREATE_NOTE:
      newState[action.note.pitch].push(action.note);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default rollReducer;
