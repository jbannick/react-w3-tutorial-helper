import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
   constructor() {
      super();
      this.state = {
         username: '',
         age: null,
         errmsg: ''
      };
   }
   myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if ("age" === nam) {
         if ( ! Number(val)) {
            err = <strong>Please enter a number for your age.</strong>;
         }
      }
      this.setState({errmsg: err});
      this.setState({}[nam]: val)
   }
   render() {
      return (
         <form>
            <h1>Hello {this.state.username} {this.state.age}</h1>
            <p>Enter your first name:</p>
            <input
               type='text'
               name='username'
               onChange={this.myChangeHandler}
            />
            <p>enter your age:</p>
            <input
               type='text'
               name='age'
               onChange={this.myChangeHandler}
            />
            {this.state.errmsg}
         </form>
      );
   }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));