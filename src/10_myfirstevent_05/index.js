import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
   shoot = (a, b) => {
      alert(a + " React event type is " + b.type);
   }
   render() {
      return (
         <button onClick={(ev) => this.shoot("Goal!", ev)}>Take the shot.</button>
      );
   }
}

class Baseball extends React.Component {
   shoot = (a, b) => {
      alert(a + " React event type is " + b.type);
   }
   render() {
      return (
         <button onClick={this.shoot.bind(this, "Basket!")}>Take the swing.</button>
      )
   }
}

class Basketball extends React.Component {
   shoot = (a, b) => {
      alert(b + " React event type from " + a.constructor.name + " is unknown");
   }
   render() {
      return (
         <button onClick={this.shoot(this, "Basket!")}>Shoot the basket.</button>
      )
   }

}

class Container extends React.Component {
  render() {
     return (
        <div>
           <Football />
           <Baseball />
           <Basketball />
        </div>
     )
   }
}
ReactDOM.render(<Container />, document.getElementById('root'));