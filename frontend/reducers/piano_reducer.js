import keyData from '../util/piano_keys';

const pianoReducer = (state = keyData, action) => {
  return keyData;
};

export default pianoReducer;
