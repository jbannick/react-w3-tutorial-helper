import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       favcolor: "red",
       isactive: ('true' === props.isactive)
    };
  }
  shouldComponentUpdate() {
    return this.state.isactive;
  }
  changeColor = () => {
    this.setState({favcolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1 style={{color: this.state.favcolor}}>
      My Favorite Color is {this.state.favcolor} - active = {this.state.isactive.toString()}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class Wrapper extends React.Component {
	render() {
	   return(
	     <div>
	     <Header isactive="true"/>
	     <Header isactive="false"/>
	     </div>
	     )
	}
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));