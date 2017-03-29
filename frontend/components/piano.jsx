import React from 'react';
import { connect } from 'react-redux';
import PianoKey from './piano_key';

class Piano extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pianoKeys = this.props.pianoKeys.map(({keyClass, note, src}) => {
      return <PianoKey keyClass={keyClass} note={note} src={src} key={note} />;
    });

    return (
      <ul className="piano">
        {pianoKeys}
      </ul>
    );
  }
}

const mapStateToProps = ({pianoKeys}) => ({
  pianoKeys
});

export default connect(mapStateToProps)(Piano);
