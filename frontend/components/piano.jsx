import React from 'react';
import { connect } from 'react-redux';
import PianoKey from './piano_key';

class Piano extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pianoKeys = this.props.pianoKeys.map(({keyClass, pitch, src}) => {
      return <PianoKey keyClass={keyClass} pitch={pitch} src={src} key={pitch} />;
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
