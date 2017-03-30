import React from 'react';
import {connect} from 'react-redux';
import PianoLane from './piano_lane';

class PianoRoll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lanes = [];
    this.props.pianoKeys.forEach(({keyClass, pitch}, idx) => {

      lanes.push(<PianoLane key={pitch} pitch={pitch} type={'lane'} />);

      if (keyClass.includes('white c') || keyClass.includes('white f')) {
        lanes.push(<PianoLane key={`${pitch}sp`} pitch={pitch} type={'spacer'} />);
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
