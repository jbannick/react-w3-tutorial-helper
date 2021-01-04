import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
   constructor() {
      super();
      this.state = {
         desc: 'The content of a React textarea goes in its value attribute.'
      };
   }
   render() {
      return (
         <form>
            <textarea value={this.state.dexc} />
         </form>
      );
   }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));