import React from 'react';
import PianoKey from './piano_key';

class Piano extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const key_data = [
      {note: "white b 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/B4v16.mp3'},
      {note: "black as 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/A%234v16.mp3'},
      {note: "white a 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/A4v16.mp3'},
      {note: "black gs 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/G%234v16.mp3'},
      {note: "white g 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/G4v16.mp3'},
      {note: "black fs 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/F%234v16.mp3'},
      {note: "white f 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/F4v16.mp3'},
      {note: "white e 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/E4v16.mp3'},
      {note: "black ds 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/D%234v16.mp3'},
      {note: "white d 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/D4v16.mp3'},
      {note: "black cs 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/C%234v16.mp3'},
      {note: "white c 4", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/C4v16.mp3'},
      {note: "white b 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/B3v16.mp3'},
      {note: "black as 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/A%233v16.mp3'},
      {note: "white a 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/A3v16.mp3'},
      {note: "black gs 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/G%233v16.mp3'},
      {note: "white g 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/G3v16.mp3'},
      {note: "black fs 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/F%233v16.mp3'},
      {note: "white f 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/F3v16.mp3'},
      {note: "white e 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/E3v16.mp3'},
      {note: "black ds 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/D%233v16.mp3'},
      {note: "white d 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/D3v16.mp3'},
      {note: "black cs 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/C3%23v16.mp3'},
      {note: "white c 3", src: 'https://s3-us-west-1.amazonaws.com/pro-piano/assets/audio/C3v16.mp3'}
    ]

    const notes = key_data.map(({note, src}) => <PianoKey note={note} src={src} key={note} />);

    return (
      <ul className="piano">
        {notes}
      </ul>
    );
  }
}

export default Piano;
