import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
   constructor() {
      super();
      this.state = {username: ''};
   }
   myChangeHandler = (event) => {
      this.setState({username: event.target.value});
   }
   render() {
      return (
         <form>
            <h1>Hello {this.state.username}</h1>
            <p>Enter your first name</p>
            <input
               type='text'
               onChange={this.myChangeHandler}
            />
         </form>
      );
   }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));