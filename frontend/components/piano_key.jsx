import React from 'react';

class PianoKey extends React.Component {
  constructor(props) {
    super(props);
    this.audio_id = props.pianoKey.replace(/\s/g,'');
    this.mouseDown = this.mouseDown.bind(this);
  }

  componentDidMount() {
    this.sound = document.getElementById(this.audio_id);
  }

  mouseDown(e) {
    console.log(this.refs.lane.getBoundingClientRect());
    this.sound.load()
    this.sound.play();
  }

  render() {
    return (
      <div className='key-wrapper'>
        <li
          ref='lane'
          onMouseDown={this.mouseDown}
          className={this.props.pianoKey}>
        </li>
        <audio id={this.audio_id} preload='auto' src={this.props.src}></audio>
      </div>
    );
  }
}

export default PianoKey;
