import React from 'react';
import {connect} from 'react-redux';
import {setDragging, setPitch, setStartPos, setEndPos, createNote} from '../actions/beat_actions';

class Beat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown () {
    this.props.setDragging(true);
    this.props.setPitch(this.props.pitch);
    this.props.setStartPos(this.props.pos);
  }

  handleMouseUp () {
    this.props.setDragging(false);
    this.props.setEndPos(this.props.pos);
    this.props.createNote(this.props.computedNote);
  }

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        data-pos={this.props.pos}
        data-pitch={this.props.pitch}
        className={this.props.beatClass}>
      </div>
    );
  }
}

const mapStateToProps = ({computedNote}) => ({
  computedNote
});

const mapDispatchToProps = dispatch => ({
  setDragging: dragging => dispatch(setDragging(dragging)),
  setPitch: pitch => dispatch(setPitch(pitch)),
  setStartPos: startPos => dispatch(setStartPos(startPos)),
  setEndPos: endPos => dispatch(setEndPos(endPos)),
  createNote: note => dispatch(createNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beat);
