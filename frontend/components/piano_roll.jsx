import React from 'react';
import {connect} from 'react-redux';
import PianoLane from './piano_lane';

class PianoRoll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lanes = [];
    this.props.pianoKeys.forEach(({key}, idx) => {
      lanes.push(<PianoLane key={key} type={'lane'} />);
      if (key.includes('white c') || key.includes('white f')) {
        lanes.push(<PianoLane key={`${key}sp`} type={'spacer'} />);
      }
    });

    return (
      <ul className="piano-roll">
        {lanes}
      </ul>
    );
  }
}

const mapStateToProps = ({pianoKeys}) => ({
  pianoKeys
});

export default connect(mapStateToProps)(PianoRoll);
