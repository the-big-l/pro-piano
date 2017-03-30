import React from 'react';
import {connect} from 'react-redux';
import {numBetween} from '../util/math_util';

class Beat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNote: false,
      location: null
    }
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseDown() {
    this.props.util.setDragging(true);
    this.props.util.setPitch(this.props.pitch);
    this.props.util.setStartPos(this.props.pos);
  }

  handleMouseOver() {
    this.props.util.setMousePos(this.props.pos);
  }

  handleMouseUp() {
    this.props.util.setDragging(false);
    this.props.util.setEndPos(this.props.pos);
    this.calculatePos();
  }

  calculatePos() {
    const first = this.props.computedNote.startPos;
    const last = this.props.computedNote.endPos;
    const num = this.props.pos;

    if (this.props.pitch === this.props.computedNote.pitch && numBetween(num, first, last)) {
      this.setState({activeNote: 'active'});
      if (this.props.pos === this.props.computedNote.startPos) {
        this.setState({location: 'start'});
      } else if (this.props.pos === this.props.computedNote.endPos) {
        this.setState({location: 'end'});
      } else {
        this.setState({location: 'middle'});
      }
    }

    // this.props.util.clearNote();
  }

  currentLocation() {
    if (this.currentActiveNote() === 'active' && this.props.pitch === this.props.computedNote.pitch) {
      if (this.props.pos === this.props.computedNote.startPos) {
        return 'start';
      } else if (this.props.pos === this.props.computedNote.currentPos) {
        return 'end';
      } else {
        return 'middle';
      }
    }
  }

  currentActiveNote() {
    const first = this.props.computedNote.startPos;
    const last = this.props.computedNote.currentPos;
    const num = this.props.pos;

    if (numBetween(num, first, last) && this.props.pitch === this.props.computedNote.pitch) {
      return 'active';
    }
  }

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
        onMouseUp={this.handleMouseUp}
        data-pos={this.props.pos}
        data-pitch={this.props.pitch}
        className={`${this.props.beatClass} ${this.state.activeNote} ${this.state.location} ${this.currentActiveNote()} ${this.currentLocation()}`}>
      </div>
    );
  }
}



export default Beat;
