import React from 'react';
import ReactDom from 'react-dom';

class Header extends React.Component {
   constructor() {
      super();
      this.state = {favcolor: "red"};
   }
   componentDidMount() {
      setTimeout(() => {
         this.setState({favcolor: "magenta"})
      }, 100000)
   }
   render() {
      return (
         <h1 style={{color: this.state.favcolor}}>My favorite color is {this.state.favcolor}</h1>
      )
   }
}
ReactDom.render(<Header />, document.getElementById('root'));