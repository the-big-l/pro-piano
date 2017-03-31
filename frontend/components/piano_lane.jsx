import React from 'react';
import Beat from './beat';
import {rollLength} from '../util/piano_keys';

class PianoLane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const beats = [];
    for (var i = 0; i < rollLength; i++) {
      if (this.props.type === 'spacer') {
        beats.push(<Beat key={`${this.props.pitch}${i}sp`} util={this.props.util} computedNote={this.props.computedNote} pitch='spacer' pos={i} beatClass='beat sp' />);
      } else {
        beats.push(<Beat key={`${this.props.pitch}${i}`} util={this.props.util} computedNote={this.props.computedNote} pitch={this.props.pitch} pos={i} beatClass='beat pitch' />);
      }
    }

    return (
      <div className='lane-wrapper'>
        <li data-pitch={this.props.pitch} className={this.props.type}></li>
        <div className='beat-wrapper'>
          {beats}
        </div>
      </div>
    );
  }
}

export default PianoLane;
