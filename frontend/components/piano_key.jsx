import React from 'react';

class PianoKey extends React.Component {
  constructor(props) {
    super(props);
    this.audio_id = props.note.replace(/\s/g,'');
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const note = document.getElementById(this.audio_id);
    note.play();
  }

  render() {


    return (
      <div className='key'>
        <li onClick={this.handleClick} className={this.props.note}></li>
        <audio id={this.audio_id} preload='auto' src={this.props.src}></audio>
      </div>
    );
  }
}

export default PianoKey;
