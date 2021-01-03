import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
   constructor() {
      super();
      this.state = {
         username: '',
         age: null
      }
   }
   mySubmitHandler = (event) => {
      event.preventDefault();
      let age = this.state.age;
      if (age > 111) {
         alert("No one is that old!");
      }
   }
   myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      if ("age" === nam) {
         if ( ! Number(val) ) {
            alert("Please enter a number for your age");
            return;
         }
      }
      this.setState({[nam]: val});
   }
   render() {
      return (
         <form onSubmit={this.mySubmitHandler}>
            <h1>Hello {this.state.username} {this.state.age}</h1>
            <p>Enter your first name:</p>
            <input
               type='text'
               name='username'
               onChange={this.myChangeHandler}
            />
            <p>Enter your age:</p>
            <input
               type='text'
               name='age'
               onChange={this.myChangeHandler}
            />
            <br/>
            <br/>
            <input type='submit' />
         </form>
      );
   }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
