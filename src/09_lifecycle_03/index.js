import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
     super(props);
     this.state = {favcolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favcolor: props.favcol};
  }
  render() {
    return (
       <h1 style={{ color: this.state.favcolor }}>My favorite color is {this.state.favcolor}</h1>
    )
  }
}
ReactDOM.render(<Header favcol="cyan"/>, document.getElementById('root'));