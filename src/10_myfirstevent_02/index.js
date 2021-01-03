import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
   shoot() {
      alert("Great shot!");
   }
   render() {
      return (
         <button onClick={this.shoot}>Take a shot.</button>
      )
   }
}
ReactDOM.render(<Football />, document.getElementById('root'));