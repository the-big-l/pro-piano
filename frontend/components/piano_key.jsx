import React from 'react';

class PianoKey extends React.Component {
  constructor(props) {
    super(props);
    this.mouseDown = this.mouseDown.bind(this);
  }

  componentDidMount() {
    this.sound = document.getElementById(this.props.note);
  }

  mouseDown(e) {
    this.sound.load()
    this.sound.play();
  }

  render() {
    return (
      <div className='key-wrapper'>
        <li
          onMouseDown={this.mouseDown}
          className={this.props.keyClass}>
        </li>
        <audio id={this.props.note} preload='auto' src={this.props.src}></audio>
      </div>
    );
  }
}

export default PianoKey;
