import { SET_DRAGGING, SET_PITCH, SET_START_POS, SET_END_POS } from '../actions/beat_actions';
import merge from 'lodash/merge';

const _nullNote = {
  dragging: false,
  pitch: null,
  startPos: null,
  endPos: null
}

const noteReducer = (state = _nullNote, action) => {
  switch(action.type) {
    case SET_DRAGGING:
      return merge({}, state, {dragging: action.dragging});
    case SET_PITCH:
      return merge({}, state, {pitch: action.pitch});
    case SET_START_POS:
      return merge({}, state, {startPos: action.startPos});
    case SET_END_POS:
      return merge({}, state, {endPos: action.endPos});
    default:
      return state;
  }
};

export default noteReducer;
