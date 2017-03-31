import React from 'react';

class PlayerPitch extends React.Component {
  constructor(props) {
    super(props);
    this.audioId = `${this.props.pitch}pl`
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'play') {
      return true;
    } else if (nextProps.status === 'continue') {
      return false;
    } else if (nextProps.status === 'stop') {
      return true;
    }
  }

  componentDidMount() {
    this.sound = document.getElementById(this.audioId);
  }

  componentDidUpdate() {
    if (this.props.status === 'play') {
      this.play();
    } else if (this.props.status === 'stop') {
      this.stop();
    }
  }

  play() {
    this.sound.load()
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }

  render() {
    return (
      <audio id={this.audioId} preload='auto' src={this.props.src}></audio>
    );
  }
}

export default PlayerPitch;
