import {
        SET_DRAGGING,
        SET_PITCH,
        SET_START_POS,
        SET_MOUSE_POS,
        SET_END_POS,
        CLEAR_NOTE } from '../actions/beat_actions';
import merge from 'lodash/merge';

const _nullNote = {
  dragging: false,
  pitch: null,
  startPos: null,
  currentPos: null,
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
    case SET_MOUSE_POS:
      return merge({}, state, {currentPos: action.currentPos});
    case SET_END_POS:
      return merge({}, state, {endPos: action.endPos});
    case CLEAR_NOTE:
      return merge({}, _nullNote);
    default:
      return state;
  }
};

export default noteReducer;
