import React from 'react';
import {connect} from 'react-redux';
import {numBetween} from '../util/math_util';

class Beat extends React.Component {
  constructor(props) {
    super(props);
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
  }

  currentLocation() {
    const first = Math.min(this.props.computedNote.startPos, this.props.computedNote.currentPos);
    const last = Math.max(this.props.computedNote.startPos, this.props.computedNote.currentPos);

    if (this.isActive()) {
      if (this.props.pos === first) {
        return 'start';
      } else if (this.props.pos === last) {
        return 'end';
      } else {
        return 'middle';
      }
    }
  }

  isActive() {
    return this.isCurrentlyActive() || this.isNoteCreated();
  }

  isNoteCreated() {
    let noteCreated = false;

    this.props.pianoRoll[this.props.pitch].forEach(note => {
      const first = note.startPos;
      const last = note.endPos;
      const num = this.props.pos;

      if (numBetween(num, first, last)) {
        noteCreated = true;
      }
    });

    return noteCreated;
  }

  isCurrentlyActive() {
    const first = this.props.computedNote.startPos;
    const last = this.props.computedNote.currentPos;
    const num = this.props.pos;

    return (numBetween(num, first, last) && this.props.pitch === this.props.computedNote.pitch);
  }

  activeClass() {
    if (this.isActive()) {
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
        className={`${this.props.beatClass} ${this.activeClass()} ${this.currentLocation()}`}>
      </div>
    );
  }
}

const mapStateToProps = ({pianoRoll}) => ({
  pianoRoll
});

export default connect(mapStateToProps)(Beat);
