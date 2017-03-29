import React from 'react';
import { connect } from 'react-redux';
import PianoKey from './piano_key';

class Piano extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pianoKeys = this.props.pianoKeys.map(({key, src}) => <PianoKey pianoKey={key} src={src} key={key} />);

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
