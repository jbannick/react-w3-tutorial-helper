import React from 'react'
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
   constructor() {
      super();
      this.state = {
         username: '',
         age: null
      }
      
   }
   myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
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
            <p>Enter your age:</p>
            <input
               type='text'
               name='age'
               onChange={this.myChangeHandler}
            />
         </form>
      );
   }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));