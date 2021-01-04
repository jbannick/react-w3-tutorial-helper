import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
   constructor() {
      super();
      this.state = {
         mycar: 'Prius'
      };
   }
   render() {
       return (
          <form>
             <select value={this.state.mycar}>
                <option value="Ford"</option>
                <option value="Chevy"</option>
                <option value="Volvo"</option>
                <option value="Fiat"</option>
                <option value="Prius"</option>
             </select>
          </form>
       );
   }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));