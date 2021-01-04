import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
   shoot = (a) => {
      alert(a);
   }
   render() {
      return (
         <button onClick={() => this.shoot("Goal!")}>Take the shot.</button>
      )
   }
}

class Baseball extends React.Component {
   shoot(a) {
      alert(a);
   }
   render() {
      return (
         <button onClick={this.shoot.bind(this, "Home run!")}>Take a swing.</button>
      )
   }
}
class Basketball extends React.Component {
   shoot(a) {
      alert(a.constructor.name);
   }
   render() {
      return (
         <button onClick={this.shoot(this, "Basket!")}>Take the shot!</button>
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
       )
   }
}
ReactDOM.render(<Container />, document.getElementById('root'));