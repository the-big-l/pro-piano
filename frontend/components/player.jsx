import React from 'react';
import { connect } from 'react-redux';
import {keyData, rollLength} from '../util/piano_keys';
import PlayerPitch from './player_pitch';

class Player extends React.Component {
  constructor(props) {
    super(props);
    const blankBeat = {};

    keyData.forEach(key => {
      blankBeat[key.pitch] = 'stop';
    })

    this.state = blankBeat;
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }

  // array of pitch statuses, each beat will set state, play, continue, or stop

  blankBeat() {
    const blankBeat = {};

    keyData.forEach(key => {
      blankBeat[key.pitch] = 'stop';
    })

    return blankBeat;
  }

  blankRoll() {
    const blankRoll = [];

    for (var i = 0; i < rollLength; i++) {
      blankRoll.push(this.blankBeat());
    }

    return blankRoll;
  }

  computeNotes() {
    const computedRoll = this.blankRoll();

    Object.keys(this.props.pianoRoll).forEach(pitch => {
      this.props.pianoRoll[pitch].forEach(note => {
        const first = Math.min(note.startPos, note.endPos);
        const last = Math.max(note.startPos, note.endPos);
        computedRoll[first][pitch] = 'play';

        for (var i = first; i < last; i++) {
          computedRoll[i + 1][pitch] = 'continue';
        }
      });
    });

    return computedRoll;
  }

  play() {
    let beat = 0;
    const computedRoll = this.computeNotes();

    this.song = setInterval(() => {
      this.setState(computedRoll[beat]);
      beat = (beat + 1) % rollLength;
    }, 250);
  }

  stop() {
    clearInterval(this.song);
  }

  render() {
    const pitches = keyData.map(({keyClass, pitch, src}) => {
      return <PlayerPitch pitch={pitch} src={src} key={pitch} status={this.state[pitch]} />;
    });

    return (
      <div className='player'>
        <button onClick={this.play}>Play</button>
        <button onClick={this.stop}>Stop</button>
        <button>Reset</button>
        <div className='sound-bank'>
          {pitches}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({pianoRoll}) => ({
  pianoRoll
});

export default connect(mapStateToProps)(Player);
