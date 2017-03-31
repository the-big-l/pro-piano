import React from 'react';
import Piano from './piano';
import PianoRoll from './piano_roll';
import Player from './player';

const App = () => (
  <div className='app'>
    <Player />
    <div className='main'>
      <Piano />
      <PianoRoll />
    </div>
  </div>
);

export default App;
