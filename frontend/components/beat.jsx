import React from 'react';
import {connect} from 'react-redux';
import {
        setDragging,
        setPitch,
        setStartPos,
        setMousePos,
        setEndPos,
        createNote,
        clearNote } from '../actions/beat_actions';

class Beat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown() {
    this.props.setDragging(true);
    this.props.setPitch(this.props.pitch);
    this.props.setStartPos(this.props.pos);
  }

  handleMouseOver() {
    this.props.setMousePos(this.props.pos);
  }

  handleMouseUp() {
    this.props.setDragging(false);
    this.props.setEndPos(this.props.pos);
    this.props.createNote(this.props.computedNote);
    this.props.clearNote();
  }

  activeNote() {
    if (this.props.computedNote)
    return null;
  }

  noteLocation() {
    return null;
  }

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
        onMouseUp={this.handleMouseUp}
        data-pos={this.props.pos}
        data-pitch={this.props.pitch}
        className={`${this.props.beatClass} ${this.activeNote} ${this.noteLocation}`}>
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
  setMousePos: currentPos => dispatch(setMousePos(currentPos)),
  setEndPos: endPos => dispatch(setEndPos(endPos)),
  createNote: note => dispatch(createNote(note)),
  clearNote: () => dispatch(clearNote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beat);
