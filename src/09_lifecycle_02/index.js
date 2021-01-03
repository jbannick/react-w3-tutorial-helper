import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
   constructor() {
      super();
      this.state = {
         favcolor: "red"
      };
   }
   render() {
      return <h1 style={ { color: this.state.favcolor }}>My favorite color is {this.state.favcolor}</h1>
   }
}

ReactDOM.render(<Header />, document.getElementById('root'));