import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
   constructor() {
      super();
      this.state = {show: true};
   }
   remHeader = () => {
      this.setState({show: false});
   }
   render()  {
      let myheader;
      if (this.state.show) {
         myheader = <Child />;
      }
      return (
         <div>
            {myheader}
            <button type="button" onClick={this.remHeader}>Remove Header</button>
         </div>
      );
   }
}

class Child extends React.Component {
  componentWillUnmount() {
     alert("The React component named Header is about to be unmounted.");
  }
  render() {
     return (
        <h1>Hello World!</h1>
     )
  };
}

ReactDOM.render(<Container />, document.getElementById('root'));