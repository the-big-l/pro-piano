import {combineReducers} from 'redux';
import pianoReducer from './piano_reducer';

const rootReducer = combineReducers({
  pianoKeys: pianoReducer
});

export default rootReducer;
