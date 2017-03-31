import React from 'react';
import {connect} from 'react-redux';
import PianoLane from './piano_lane';
import { createNote } from '../actions/beat_actions';


class PianoRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      pitch: null,
      startPos: null,
      currentPos: null,
      endPos: null
    }
    this.noteUtil = {
      setDragging: this.setDragging.bind(this),
      setPitch: this.setPitch.bind(this),
      setStartPos: this.setStartPos.bind(this),
      setMousePos: this.setMousePos.bind(this),
      setEndPos: this.setEndPos.bind(this),
      clearNote: this.clearNote.bind(this)
    }
  }

  setDragging(dragging) {
    this.setState({dragging});
  }

  setPitch(pitch) {
    this.setState({pitch});
  }

  setStartPos(startPos) {
    this.setState({startPos});
  }

  setMousePos(currentPos) {
    this.setState({currentPos});
  }

  setEndPos(endPos) {
    this.setState({endPos}, () => {
      this.props.createNote(this.state);
      this.clearNote();
    });
  }

  clearNote() {
    this.setState({
      dragging: false,
      pitch: null,
      startPos: null,
      currentPos: null,
      endPos: null
    });
  }

  render() {
    const lanes = [];
    this.props.pianoKeys.forEach(({keyClass, pitch}, idx) => {

      lanes.push(<PianoLane key={pitch} util={this.noteUtil} computedNote={this.state} pitch={pitch} type={'lane'} />);

      if (keyClass.includes('white c') || keyClass.includes('white f')) {
        lanes.push(<PianoLane key={`${pitch}sp`} util={this.noteUtil} computedNote={this.state} pitch={pitch} type={'spacer'} />);
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

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PianoRoll);
