import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        brand: "Prius",
        model: "XW30",
        color: "green",
        year: 2010
     }
  }
  changeColor = () => {
     this.setState({color: "blue"});
  }
  render() {
     return (
        <div>
           <h1>My {this.state.brand}</h1>
           <p style={ { color: this.state.color }}>
              It is a {this.state.year} {this.state.color} {this.state.model}.
           </p>
           <button type="button" onClick={this.changeColor}>Change Color</button>
        </div>
     );
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));