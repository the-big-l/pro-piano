import React from 'react';

class PianoKey extends React.Component {
  constructor(props) {
    super(props);
    this.audio_id = props.note.replace(/\s/g,'');
    this.mouseDown = this.mouseDown.bind(this);
    this.dragOver = this.dragOver.bind(this);
  }
  componentDidMount() {
    this.sound = document.getElementById(this.audio_id);
  }

  mouseDown() {
    this.sound.load()
    this.sound.play();
  }

  dragOver() {
    this.sound.load()
    this.sound.play();
  }

  render() {
    return (
      <div className='key'>
        <li
          onMouseDown={this.mouseDown}
          onDragOver={this.dragOver}
          className={this.props.note}>
        </li>
        <audio id={this.audio_id} preload='auto' src={this.props.src}></audio>
      </div>
    );
  }
}

export default PianoKey;
