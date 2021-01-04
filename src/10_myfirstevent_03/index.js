import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
   shoot = () => {
      alert(this.constructor.name)
   }
   render() {
      return (
         <button onClick={this.shoot}>Take the shot.</button>
      )
   }
}

class Basketball extends React.Component {
   constructor() {
      super();
   }
   shoot() {
      if (undefined == this) {
         alert("'this' is undefined.");
      } else {
         alert(this.constructor.name);
      }
   }
   render() {
      return (
          <button onClick={this.shoot}>Take the shot.</button>
      )
   }
}

class Baseball extends React.Component {
   constructor() {
      super();
      this.shoot = this.shoot.bind(this);
   }
   shoot() {
      alert(this.constructor.name)
   }
   render() {
      return (
          <button onClick={this.shoot}>Take the shot.</button>
      )
   }
}

class Container extends React.Component {
   render() {
      return (
         <div>
            <Football />
            <Basketball />
            <Baseball />
         </div>
      );
   }
}
ReactDOM.render(<Container />, document.getElementById('root'));