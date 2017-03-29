import React from 'react';
import {connect} from 'react-redux';

class PianoLane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const beats = [];
    for (var i = 0; i < 16; i++) {
      if (this.props.type !== 'spacer') {
        beats.push(<div key={`${this.props.note}${i}`} data-note={this.props.note} className='beat'></div>);
      }
    }
    return (
      <div className='lane-wrapper'>
        <li className={this.props.type}></li>
        <div className='beat-wrapper'>
          {beats}
        </div>
      </div>
    );
  }
}

export default PianoLane;
