import {combineReducers} from 'redux';
import pianoReducer from './piano_reducer';
import noteReducer from './note_reducer';
import rollReducer from './roll_reducer';

const rootReducer = combineReducers({
  pianoKeys: pianoReducer,
  computedNote: noteReducer,
  pianoRoll: rollReducer
});

export default rootReducer;
