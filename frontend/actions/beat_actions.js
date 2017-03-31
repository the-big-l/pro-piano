export const SET_DRAGGING = 'SET_DRAGGING';
export const SET_PITCH = 'SET_PITCH';
export const SET_START_POS = 'SET_START_POS';
export const SET_MOUSE_POS = 'SET_MOUSE_POS';
export const SET_END_POS = 'SET_END_POS';
export const CREATE_NOTE = 'CREATE_NOTE';
export const CLEAR_NOTE = 'CLEAR_NOTE';
export const CLEAR_ROLL = 'CLEAR_ROLL';


export const setDragging = dragging => ({
  type: SET_DRAGGING,
  dragging
});

export const setPitch = pitch => ({
  type: SET_PITCH,
  pitch
});

export const setStartPos = startPos => ({
  type: SET_START_POS,
  startPos
});

export const setMousePos = currentPos => ({
  type: SET_MOUSE_POS,
  currentPos
});

export const setEndPos = endPos => ({
  type: SET_END_POS,
  endPos
});

export const createNote = note => ({
  type: CREATE_NOTE,
  note
});

export const clearNote = () => ({
  type: CLEAR_NOTE
});

export const clearRoll = () => ({
  type: CLEAR_ROLL
});
