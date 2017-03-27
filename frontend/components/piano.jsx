import React from 'react';

class Piano extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="piano">
        <li className="white b"></li>
        <li className="black as"></li>
        <li className="white a"></li>
        <li className="black gs"></li>
        <li className="white g"></li>
        <li className="black fs"></li>
        <li className="white f"></li>
        <li className="white e"></li>
      	<li className="black ds"></li>
    	  <li className="white d"></li>
    	  <li className="black cs"></li>
    	  <li className="white c"></li>
      </ul>
    );
  }
}

export default Piano;
